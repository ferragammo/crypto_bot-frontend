import { FC, useEffect, useState } from "react";
import { getSymbolData } from "../api/SymbolApi";
//import { ISymbol } from '../types/SymbolType';
import SymbolResultInfo from "../components/SymbolResultInfo";
import Loading from "../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ISymbol, ITickerInfo, ITickerInfoResponse } from "../types/SymbolType";
import { closeWebSocket, connectToWebSocket } from "../api/WebSocketLiveMarket";

const HomePage: FC = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const [symbolName, setSymbolName] = useState<string>("");
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

   const [symbolData, setSymbolData] = useState<ISymbol | null>(null);
   const [wsResponse, setWsResponse] = useState<ITickerInfoResponse | null>(
      null
   );
   const [liveMarketData, setLiveMarketData] = useState<ITickerInfo[] | null>(
      null
   );

   const [isLiveMarket, setIsLiveMarket] = useState<boolean>(false);

   const socket: WebSocket | null = null;

   const toLocalISOString = (date: Date): string => {
      const offset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - offset).toISOString().slice(0, -1);
   };

   const fetchSymbolData = async () => {
      setIsLoading(true);
      setSymbolData(null);

      try {
         const isoDate = selectedDate ? toLocalISOString(selectedDate) : null;
         const encodedDate = isoDate ? encodeURIComponent(isoDate) : null;

         const data = await getSymbolData(symbolName, encodedDate);
         if (data) {
            setSymbolData(data.data);
            setErrorMessage(null);
         } else {
            setErrorMessage(`Symbol "${symbolName}" not found.`);
         }
      } catch (error) {
         setErrorMessage("Failed to fetch symbol data.");
         console.log(error);
      }
      setIsLoading(false);
   };

   const fetchLiveMarketData = async () => {
      setIsLoading(true);

      try {
         connectToWebSocket(
            symbolName,
            (data) => setWsResponse(data),
            (error) => setErrorMessage(error)
         );
      } catch (error) {
         console.error(error);
         setErrorMessage("Connection error.");
      }
   };

   useEffect(() => {
      if (wsResponse?.successful) {
         if (wsResponse.data) {
            setLiveMarketData(wsResponse.data.tickerInfo);
            setIsLoading(false);
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [wsResponse?.data]);

   useEffect(() => {
      if (errorMessage) setIsLoading(false);
   }, [errorMessage]);

   // useEffect(() => {
   //    console.log(liveMarketData)
   // }, [liveMarketData]);


   const changeSymbolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSymbolName(e.target.value);
   };

   const searchSymbolHandler = () => {
      if (!isLoading) {
         closeWebSocket(socket);
         setLiveMarketData(null);
         setErrorMessage(null)
         setSymbolData(null);
         setWsResponse(null);
         if (isLiveMarket) {
            fetchLiveMarketData();
         } else {
            fetchSymbolData();
         }
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !isLoading) {
         searchSymbolHandler();
      }
   };

   const resetDate = () => {
      setSelectedDate(null);
   };

   return (
      <div className="bg-gray-100 h-full min-h-screen w-full">
         <header className="flex py-5 px-8 shadow-sm bg-white w-full ">
            <span className="text-2xl text-gray-900 font-bold mr-28 min-w-36">
               {isLiveMarket ? "Live Market" : "Dashboard"}
            </span>
            <div className="flex space-x-3">
               <div className="relative w-96">
                  <input
                     value={symbolName}
                     onChange={changeSymbolNameHandler}
                     onKeyDown={handleKeyDown}
                     type="text"
                     placeholder="Enter ticker symbol (e.g., AAPL, MSFT)"
                     className="outline-none w-full pl-4 pr-12 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>

                  <div className={`flex border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 ${isLiveMarket ? 'invisible' : ''}`}>
                     <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        placeholderText="Choose Date"
                        dateFormat="dd/MM/yyyy HH:mm"
                        timeIntervals={15}
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeCaption="Time"
                        className="outline-none w-full pl-4 pr-12 py-2 rounded-lg text-sm"
                     />

                     <button
                        onClick={resetDate}
                        className="px-2 text-sm text-gray-500 hover:text-indigo-600"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="size-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                           />
                        </svg>
                     </button>
                  </div>
   
               <button
                  onClick={searchSymbolHandler}
                  className=" text-gray-400 px-3 hover:text-indigo-600 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="size-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                     />
                  </svg>
               </button>

               <div className="h-full">
                  <button
                     onClick={() => setIsLiveMarket(false)}
                     className={` ${
                        !isLiveMarket
                           ? "text-white bg-gray-300"
                           : "text-gray-400 border-gray-300 hover:text-indigo-600 hover:border-indigo-500"
                     } px-3 rounded-l-lg border h-full`}
                  >
                     TSLA
                  </button>
                  <button
                     onClick={() => setIsLiveMarket(true)}
                     className={` ${
                        isLiveMarket
                           ? "text-white bg-gray-300"
                           : "text-gray-400 border-gray-300 hover:text-indigo-600 hover:border-indigo-500"
                     } px-3 rounded-r-lg border h-full`}
                  >
                     LIVE
                  </button>
               </div>
            </div>
         </header>
         <main className="px-4 sm:px-6 lg:px-8 py-8">
            {errorMessage ? (
               <p className="text-red-500">{errorMessage}</p>
            ) : symbolData || liveMarketData ? (
               <SymbolResultInfo
                  symbolData={symbolData}
                  liveMarketData={liveMarketData}
               />
            ) : isLoading ? (
               <Loading />
            ) : (
               <></>
            )}
         </main>
      </div>
   );
};

export default HomePage;
