import { FC, useEffect, useState } from "react";
import { getSymbolData } from "../api/SymbolApi";
//import { ISymbol } from '../types/SymbolType';
import SymbolResultInfo from "../components/SymbolResultInfo";
import Loading from "../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage: FC = () => {
   const [symbolData, setSymbolData] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const [symbolName, setSymbolName] = useState<string>("");
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

   //const symbolName = 'aapl';

   const toUTCISOString = (date: Date): string => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");
      const seconds = String(date.getUTCSeconds()).padStart(2, "0");
      const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
   };

   const fetchSymbolData = async () => {
      setIsLoading(true);

      try {
         const isoDate = selectedDate ? toUTCISOString(selectedDate) : null;
         const encodedDate = isoDate ? encodeURIComponent(isoDate) : null;
         const data = await getSymbolData(symbolName, encodedDate);
         if (data) {
            setSymbolData(data);
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

   const changeSymbolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSymbolName(e.target.value);
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         searchSymbolHandler();
      }
   };

   const searchSymbolHandler = () => {
      setSymbolData(null);
      fetchSymbolData();
   };

   const resetDate = () => {
      setSelectedDate(null);
   };

   // useEffect(() => {
   //     fetchSymbolData();
   // }, [symbolName]);

   useEffect(() => {
      console.log(selectedDate);
   }, [selectedDate]);

   return (
      <div className="bg-gray-100 h-full min-h-screen">
         <header className="flex py-5 px-8 shadow-sm bg-white ">
            <span className="text-2xl text-gray-900 font-bold mr-28">
               Dashboard
            </span>
            <div className="relative w-96 mr-8">
               <input
                  value={symbolName}
                  onChange={changeSymbolNameHandler}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Enter ticker symbol (e.g., AAPL, MSFT)"
                  className="outline-none w-full pl-4 pr-12 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
               />
               <button
                  onClick={searchSymbolHandler}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-indigo-600"
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
            </div>
            <div className="flex border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
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
         </header>
         <main className="px-4 sm:px-6 lg:px-8 py-8">
            {errorMessage ? (
               <p className="text-red-500">{errorMessage}</p>
            ) : symbolData ? (
               <SymbolResultInfo text={symbolData} />
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
