export interface ISymbol {
   aiResponse: string;
   preMarketConditions: IPreMarketConditions;
   currentScenarios: ICurrentScenario[];
   confluence: IConfluence;
}

export interface ITickerInfo {
   referenceDate: string;
   conclusion: string;
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

export interface ICurrentScenario {
   timeOpen: string;
   price: number;
   emaStatus: number;
   vwapStatus: number;
   vwapExtension: number;
   emaTouch: boolean;
   emaCrossing: boolean;
   expansionTo9EMA: number;
   candlePattern: string;
}

export interface IConfluence {
   pullBack: boolean;
   emaTouch: boolean;
   pmlBNB: boolean;
}

export interface ISymbolResponse {
   data: ISymbol;
   successful: boolean;
   error: {
      message: string;
   };
}

export interface ITickerInfoResponse {
   data: { tickerInfo: ITickerInfo[] } | null;
   successful: boolean;
}
