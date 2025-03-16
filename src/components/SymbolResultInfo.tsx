import { FC } from "react";
import { ISymbol, ITickerInfo } from "../types/SymbolType";
import AIResponseBlock from "./InfoBlocks/AIResponseBlock";
import PreMarketConditionsBlock from "./InfoBlocks/PreMarketConditionsBlock";
import CurrentScenarioBlock from "./InfoBlocks/CurrentScenarioBlock";
import ConfluenceBlock from "./InfoBlocks/ConfluenceBlock";
import LiveCommentaryBlock from "./InfoBlocks/LiveCommentaryBlock";

interface SymbolResultInfoProps {
   symbolData?: ISymbol | null;
   liveMarketData?: ITickerInfo[] | null;
}

const SymbolResultInfo: FC<SymbolResultInfoProps> = ({
   symbolData,
   liveMarketData,
}) => {
   if (!symbolData && !liveMarketData) {
      return <h1>Not found</h1>;
   }
   return (
      <div className="space-y-6">
         {symbolData && (
            <>
               <AIResponseBlock text={symbolData.aiResponse} />
               <PreMarketConditionsBlock
                  data={symbolData.preMarketConditions}
               />
               <CurrentScenarioBlock />
               <ConfluenceBlock />
            </>
         )}
         {liveMarketData && <LiveCommentaryBlock data={liveMarketData} />}
      </div>
   );
};

export default SymbolResultInfo;
