import { FC } from "react";
import Condition from "./Helpers/Condition";
import { PreMarketConditions } from "../../constants/PreMarketConditions";
import { IPreMarketConditions } from "../../types/SymbolType";

interface ResponseProps {
   data: IPreMarketConditions;
}

const PreMarketConditionsBlock: FC<ResponseProps> = ({ data }) => {
   return (
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
               message={data.vwapAnalysis.message}
               label={
                  PreMarketConditions.vwapAnalysis.VwapAnalysisLabel.find(
                     (item) =>
                        item.label ===
                        data.vwapAnalysis.label
                  ) || {
                     label: 0,
                     title: "Unknown",
                     color: "bg-gray-50 text-gray-700",
                  }
               }
            />
            <Condition
               header={PreMarketConditions.ema9.header}
               message={data.ema9.message}
               label={
                  PreMarketConditions.ema9.EMA9AnalysisLabel.find(
                     (item) =>
                        item.label === data.ema9.label
                  ) || {
                     label: 0,
                     title: "Unknown",
                     color: "bg-gray-50 text-gray-700",
                  }
               }
            />
            <Condition
               header={PreMarketConditions.timeframe15Min.header}
               message={data.timeframe15Min.message}
               label={
                  PreMarketConditions.timeframe15Min.TimeFrameLabel.find(
                     (item) =>
                        item.label ===
                        data.timeframe15Min.label
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
               <span className="font-medium text-gray-900">
                  Analysis Summary:
               </span>{" "}
               <span>{data.summary}</span>
            </p>
         </div>
      </div>
   );
};

export default PreMarketConditionsBlock;
