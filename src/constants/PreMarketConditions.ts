export const PreMarketConditions = {
   vwapAnalysis: {
      header: "VWAP Analysis",
      VwapAnalysisLabel: [
         {
            label: 1,
            title: "Below VWAP",
            color: "bg-red-50 text-red-700",
         },
         {
            label: 2,
            title: "Mixed",
            color: "bg-yellow-50 text-yellow-700",
         },
         {
            label: 3,
            title: "Above VWAP",
            color: "bg-green-50 text-green-700",
         },
      ],
   },
   ema9: {
    header: "9 EMA",
    EMA9AnalysisLabel: [
       {
          label: 1,
          title: "Strong Resistance",
          color: "bg-red-50 text-red-700",
       },
       {
          label: 2,
          title: "Mixed",
          color: "bg-yellow-50 text-yellow-700",
       },
       {
          label: 3,
          title: "Strong Support",
          color: "bg-green-50 text-green-700",
       },
    ],
 },

 timeframe15Min: {
    header: "15-min Timeframe",
    TimeFrameLabel: [
       {
          label: 1,
          title: "Strong Reaction",
          color: "bg-yellow-50 text-yellow-700",
       },
       {
          label: 2,
          title: "No Reaction",
          color: "bg-green-50 text-green-700",
       },
    ],
 },
} as const;
