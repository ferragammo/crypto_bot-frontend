import { FC } from "react";

interface ConditionProps {
   header: string;
   message: string;
   label: {
      label: number;
      title: string;
      color: string;
   };
}
const Condition: FC<ConditionProps> = ({ header, message, label }) => {
   return (
      <div className="flex items-center justify-between">
         <div>
            <span className="text-sm font-medium text-gray-900">
              {header}
            </span>
            <p className="text-sm text-gray-500 mt-1">
               {message}
            </p>
         </div>
         <span className={`px-3 py-1 text-sm font-medium rounded-full ${label.color}`}>
            {label.title}
         </span>
      </div>
   );
};

export default Condition;
