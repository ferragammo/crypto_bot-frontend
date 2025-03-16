import { FC } from "react";

const ConfluenceBlock: FC = () => {
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
               className="lucide lucide-target h-5 w-5 text-indigo-600"
            >
               <circle cx="12" cy="12" r="10"></circle>
               <circle cx="12" cy="12" r="6"></circle>
               <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Confluence</h3>
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
   );
};

export default ConfluenceBlock;
