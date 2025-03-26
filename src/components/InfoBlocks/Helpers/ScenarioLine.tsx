import { FC } from "react";
import { ICurrentScenario } from "../../../types/SymbolType";
import { PreMarketConditions } from "../../../constants/PreMarketConditions";

interface ScenarioLineProps {
   scenario: ICurrentScenario;
}



const ScenarioLine: FC<ScenarioLineProps> = ({ scenario }) => {
    const foundLabelVwap =
   PreMarketConditions.vwapAnalysis.VwapAnalysisLabel.find(
      (item) => item.label === scenario.vwapStatus
   ) || {
      label: 0,
      title: "Unknown",
      color: "bg-gray-50 text-gray-700",
   };

   const foundLabelEma =
   PreMarketConditions.ema9.EMA9AnalysisLabel.find(
      (item) => item.label === scenario.emaStatus
   ) || {
      label: 0,
      title: "Unknown",
      color: "bg-gray-50 text-gray-700",
   };
   return (
      <tr className="hover:bg-gray-50">
         <td className="px-4 py-2 whitespace-nowrap">
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
               {scenario.timeOpen}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
               {scenario.price}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${foundLabelEma.color} `}>
                {foundLabelEma.title}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${foundLabelVwap.color}`}>
            {foundLabelVwap.title}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
              {scenario.vwapExtension}%
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${scenario.emaTouch ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
               {scenario.emaTouch ? "Yes" : "No"}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${scenario.emaCrossing ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
               {scenario.emaCrossing ? "Yes" : "No"}
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-700">
               {scenario.expansionTo9EMA}% 
            </span>
         </td>
         <td className="px-4 py-2 whitespace-nowrap">
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gray-50 text-gray-700">
               {scenario.candlePattern}
            </span>
         </td>
      </tr>
   );
};

export default ScenarioLine;
