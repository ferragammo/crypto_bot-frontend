import { FC } from "react";
import { ICurrentScenario } from "../../types/SymbolType";
import ScenarioLine from "./Helpers/ScenarioLine";

interface CurrentScenarioBlockProps {
   data: ICurrentScenario[];
}

const CurrentScenarioBlock: FC<CurrentScenarioBlockProps> = ({ data }) => {
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
                  {data.map((scenario, index) => (
                     <ScenarioLine key={index} scenario={scenario} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default CurrentScenarioBlock;
