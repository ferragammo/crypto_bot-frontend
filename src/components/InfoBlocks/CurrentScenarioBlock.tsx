import { FC } from "react";

const CurrentScenarioBlock: FC = () => {
   return (
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
   );
};

export default CurrentScenarioBlock;
