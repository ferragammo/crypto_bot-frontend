export interface ISymbolData {
    timestamp: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number
}

export interface ISymbol {
    symbol: string;
    data: ISymbolData;
}
