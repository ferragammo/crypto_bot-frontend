import { FC } from "react";
import ReactMarkdown from "react-markdown";
import Condition from "./Condition";
import { PreMarketConditions } from "../constants/PreMarketConditions";
import { ISymbol } from "../types/SymbolType";
//import { ISymbol } from '../types/SymbolType';

// interface SymbolResultInfoProps {
//     symbol: ISymbol;
// }

interface SymbolResultInfoProps {
   symbolData: ISymbol;
}

const SymbolResultInfo: FC<SymbolResultInfoProps> = ({ symbolData }) => {
   // const date = new Date(symbol.data.timestamp);
   // const currentTime = date.toLocaleTimeString('ru-RU', {
   //     hour: '2-digit',
   //     minute: '2-digit',
   // });

   // const timePlus15 = new Date(date);
   // timePlus15.setMinutes(timePlus15.getMinutes() + 15);
   // const timePlus15Str = timePlus15.toLocaleTimeString('ru-RU', {
   //     hour: '2-digit',
   //     minute: '2-digit',
   // });

   // const timeMinus15 = new Date(date);
   // timeMinus15.setMinutes(timeMinus15.getMinutes() - 15);
   // const timeMinus15Str = timeMinus15.toLocaleTimeString('ru-RU', {
   //     hour: '2-digit',
   //     minute: '2-digit',
   // });
   return (
      <div className="space-y-6">
         <div className="bg-white rounded-lg shadow-sm p-6 mt-0">
            <div className="flex items-center space-x-2 mb-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bot h-5 w-5 text-indigo-600"
               >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
               </svg>
               <h3 className="text-lg font-semibold text-gray-900">
                  AI Response
               </h3>
            </div>
            <div className="space-y-6 markdown">
               <ReactMarkdown>{symbolData.aiResponse}</ReactMarkdown>
            </div>
            {/* <div className='mt-6 pt-6 border-t border-gray-100'>
                    <p className='text-sm text-gray-600'>
                        <span className='font-medium'>Analysis Summary:</span>{' '}
                        Price action shows significant weakness with consistent
                        VWAP and 9 EMA rejection. Confluence required for
                        further analysis.
                    </p>
                </div> */}
         </div>
         <div className="bg-white rounded-lg shadow-sm p-6 mt-0">
            <div className="flex items-center space-x-2 mb-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-line-chart h-5 w-5 text-indigo-600"
               >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
               </svg>
               <h3 className="text-lg font-semibold text-gray-900">
                  Pre-Market Conditions
               </h3>
            </div>
            <div className="space-y-6">
               <Condition
                  header={PreMarketConditions.vwapAnalysis.header}
                  message={symbolData.preMarketConditions.vwapAnalysis.message}
                  label={
                     PreMarketConditions.vwapAnalysis.VwapAnalysisLabel.find(
                        (item) =>
                           item.label ===
                           symbolData.preMarketConditions.vwapAnalysis.label
                     ) || {
                        label: 0,
                        title: "Unknown",
                        color: "bg-gray-50 text-gray-700",
                     }
                  }
               />
               <Condition
                  header={PreMarketConditions.ema9.header}
                  message={symbolData.preMarketConditions.ema9.message}
                  label={
                     PreMarketConditions.ema9.EMA9AnalysisLabel.find(
                        (item) =>
                           item.label ===
                           symbolData.preMarketConditions.ema9.label
                     ) || {
                        label: 0,
                        title: "Unknown",
                        color: "bg-gray-50 text-gray-700",
                     }
                  }
               />
               <Condition
                  header={PreMarketConditions.timeframe15Min.header}
                  message={symbolData.preMarketConditions.timeframe15Min.message}
                  label={
                     PreMarketConditions.timeframe15Min.TimeFrameLabel.find(
                        (item) =>
                           item.label ===
                           symbolData.preMarketConditions.timeframe15Min.label
                     ) || {
                        label: 0,
                        title: "Unknown",
                        color: "bg-gray-50 text-gray-700",
                     }
                  }
               />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
               <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Analysis Summary:</span> <span>{symbolData.preMarketConditions.summary}</span>
               </p>
            </div>
         </div>
         <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart2 h-5 w-5 text-indigo-600"
               >
                  <line x1="18" x2="18" y1="20" y2="10"></line>
                  <line x1="12" x2="12" y1="20" y2="4"></line>
                  <line x1="6" x2="6" y1="20" y2="14"></line>
               </svg>
               <h3 className="text-lg font-semibold text-gray-900">
                  Current Scenario
               </h3>
            </div>
            <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                     <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           Time Open
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           Price
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           EMA Status
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           VWAP
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           VWAP Extension
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           EMA Touch
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           EMA Crossing
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           Expansion to 9EMA
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                           Candle Pattern
                        </th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              09:45:00
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              $156.78
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              Below
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              Below
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
                              $1.72
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-green-50 text-green-700">
                              Yes
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              No
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
                              0.5%
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              Doji
                           </span>
                        </td>
                     </tr>
                     <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              10:00:00
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              $157.23
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              Below
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              Below
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
                              $1.45
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              No
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-50 text-red-700">
                              No
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
                              0.3%
                           </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                           <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
                              Hammer
                           </span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target h-5 w-5 text-indigo-600"
               >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
               </svg>
               <h3 className="text-lg font-semibold text-gray-900">
                  Confluence
               </h3>
            </div>
            <div className="space-y-4">
               <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-check-circle h-5 w-5 text-green-500"
                  >
                     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                     <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                     Pullback
                  </span>
               </div>
               <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-check-circle h-5 w-5 text-green-500"
                  >
                     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                     <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                     9EMA Touch
                  </span>
               </div>
               <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-check-circle h-5 w-5 text-green-500"
                  >
                     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                     <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                     PML BNB
                  </span>
               </div>
            </div>
         </div>
         <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square h-5 w-5 text-indigo-600"
               >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
               </svg>
               <h3 className="text-lg font-semibold text-gray-900">
                  Live Commentary
               </h3>
            </div>
            <div className="space-y-4">
               <div className="flex space-x-4 p-4 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0">
                     <div className="text-sm font-medium text-gray-500">
                        10:00:00
                     </div>
                  </div>
                  <div className="flex-1">
                     <p className="text-sm text-yellow-600">
                        Price rejected at 9EMA level with increased volume.
                        Watch for potential continuation of downward movement.
                     </p>
                  </div>
               </div>
               <div className="flex space-x-4 p-4 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0">
                     <div className="text-sm font-medium text-gray-500">
                        09:45:00
                     </div>
                  </div>
                  <div className="flex-1">
                     <p className="text-sm text-red-600">
                        Strong bearish pressure continues. Price action remains
                        below VWAP with 80% of candles failing to close above
                        9EMA.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SymbolResultInfo;
