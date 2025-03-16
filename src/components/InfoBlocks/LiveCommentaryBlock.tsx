import { FC } from "react";
import { ITickerInfo } from "../../types/SymbolType";
import Commentary from "./Helpers/Commentary";

interface LiveCommentaryBlockProps {
   data: ITickerInfo[];
}

const LiveCommentaryBlock: FC<LiveCommentaryBlockProps> = ({data}) => {
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
               className="lucide lucide-message-square h-5 w-5 text-indigo-600"
            >
               <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">
               Live Commentary
            </h3>
         </div>
         <div className="space-y-4">
         {data.map((item, index) => (
            <Commentary key={index} data={item} />
         ))}
         </div>
      </div>
   );
};

export default LiveCommentaryBlock;
