// export interface ISymbolData {
//    timestamp: string;
//    open: number;
//    high: number;
//    low: number;
//    close: number;
//    volume: number;
// }

export interface ISymbol {
    aiResponse: string;
    preMarketConditions: IPreMarketConditions;
}

export interface IPreMarketConditions {
   vwapAnalysis: {
      message: string;
      label: number;
   };
   ema9: {
      message: string;
      label: number;
   };
   timeframe15Min: {
      message: string;
      label: number;
   };
   summary: string;
}



export interface ISymbolResponse {
   data: ISymbol;
   successful: true;
   error: {
      message: string;
   };
}
