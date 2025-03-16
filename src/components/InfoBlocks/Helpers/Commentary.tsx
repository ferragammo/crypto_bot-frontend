import { FC } from "react";
import { ITickerInfo } from "../../../types/SymbolType";
import ReactMarkdown from "react-markdown";


interface CommentaryProps {
   data: ITickerInfo;
}
const Commentary: FC<CommentaryProps> = ({ data }) => {
   return (
      <div className="flex space-x-4 p-4 rounded-lg bg-gray-50">
         <div className="flex-shrink-0">
            <div className="text-md font-bold text-gray-700">
               {data.referenceDate}
            </div>
         </div>
         <div className="flex-1 text-md markdown_commentary">
               <ReactMarkdown>{data.conclusion}</ReactMarkdown>
         </div>
      </div>
   );
};

export default Commentary;
