import { FC } from "react";
import ReactMarkdown from "react-markdown";


interface ResponseProps {
   text: string;
}

const AIResponseBlock: FC<ResponseProps> = ({ text }) => {
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
               className="lucide lucide-bot h-5 w-5 text-indigo-600"
            >
               <path d="M12 8V4H8" />
               <rect width="16" height="12" x="4" y="8" rx="2" />
               <path d="M2 14h2" />
               <path d="M20 14h2" />
               <path d="M15 13v2" />
               <path d="M9 13v2" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">AI Response</h3>
         </div>
         <div className="space-y-6 markdown">
            <ReactMarkdown>{text}</ReactMarkdown>
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
   );
};

export default AIResponseBlock
