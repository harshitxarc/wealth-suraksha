import React, { useEffect, useState } from "react";
import axios from "axios";

type TickerItem = {
  name: string;
  value: number;
  change: number;
  percent: number;
};

const symbolsBatch1: Record<string, string> = {
  SENSEX: "SENSEX",
  
  GOLD: "XAU/USD",
  SILVER: "XAG/USD",
  Crude: "CL=F",
  "USD/INR": "USD/INR",
  EURO: "EUR/INR",
  UK: "GBP/INR",
  YEN: "JPY/INR",
};

const symbolsBatch2: Record<string, string> = {
  "NIFTY 50": "NSEI",
  NASDAQ: "IXIC",
  FTSE: "FTSE",
  Nikkei: "N225",
};

const API_KEY = import.meta.env.VITE_TWELVE_DATA_KEY as string;

const LiveTicker: React.FC = () => {
  const [data, setData] = useState<TickerItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [res1, res2] = await Promise.all([
        axios.get(
          `https://api.twelvedata.com/quote?symbol=${Object.values(
            symbolsBatch1
          ).join(",")}&apikey=${API_KEY}`
        ),
        axios.get(
          `https://api.twelvedata.com/quote?symbol=${Object.values(
            symbolsBatch2
          ).join(",")}&apikey=${API_KEY}`
        ),
      ]);

      const parseResponse = (
        res: { data: any },
        symbols: Record<string, string>
      ): TickerItem[] =>
        Object.entries(symbols).map(([name, symbol]) => {
          const item = res.data[symbol];
          return {
            name,
            value: parseFloat(item?.close ?? "0"),
            change: parseFloat(item?.change ?? "0"),
            percent: parseFloat(item?.percent_change ?? "0"),
          };
        });

      setData([...parseResponse(res1, symbolsBatch1), ...parseResponse(res2, symbolsBatch2)]);
    } catch (err) {
      console.error("Error fetching ticker data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  const shimmerCards = Array.from({ length: 12 }).map((_, i) => (
    <div
      key={i}
      className="inline-block min-w-[140px] px-4 py-2 border rounded-xl bg-white shadow-sm text-center"
    >
      <div className="h-4 w-16 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
      <div className="h-5 w-20 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
      <div className="h-4 w-24 bg-gray-200 rounded mx-auto animate-pulse"></div>
    </div>
  ));

  return (
    <section className="w-full py-2 bg-background/80 font-sans border-t border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-semibold">
            <span className="text-red-500">Live</span> <span className="text-gradient">Ticker</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        </div>
        <div className="flex whitespace-nowrap animate-scroll gap-2 px-0 scrollbar-thin">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[110px] rounded-lg shadow flex flex-col items-center px-2 py-2 border border-white/10 bg-background/90"
                >
                  <div className="h-4 w-16 bg-muted rounded mb-1 animate-pulse"></div>
                  <div className="h-5 w-20 bg-muted rounded mb-1 animate-pulse"></div>
                  <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                </div>
              ))
            : [...data, ...data].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[110px] rounded-lg shadow flex flex-col items-center px-2 py-2 border border-white/10 bg-background/90"
                >
                  <span className="text-[10px] font-medium text-muted-foreground mb-0.5 tracking-wide uppercase">{item.name}</span>
                  <span className="text-base font-bold text-foreground mb-0.5">{item.value.toLocaleString("en-IN")}</span>
                  <span
                    className={`text-xs font-semibold flex items-center gap-1 ${
                      item.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.change >= 0 ? (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L10 8H2L6 2Z" fill="currentColor"/></svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10L2 4H10L6 10Z" fill="currentColor"/></svg>
                    )}
                    {item.change} ({item.percent}%)
                  </span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTicker;





// import React, { useEffect, useState } from "react";

// type TickerItem = {
//   name: string;
//   value: number;
//   change: number;
//   percent: number;
// };

// const mockData: TickerItem[] = [
//   { name: "SENSEX", value: 80752.3, change: 250.31, percent: 0.31 },
//   { name: "GOLD", value: 99183, change: 540, percent: 0.54 },
//   { name: "SILVER", value: 102200, change: 1200, percent: 1.17 },
//   { name: "Crude", value: 5097, change: 157, percent: 3.08 },
//   { name: "USD/INR", value: 85.831, change: -0.17, percent: -0.20 },
//   { name: "EURO", value: 96.5851, change: 0.18, percent: 0.18 },
//   { name: "UK", value: 114.067, change: 0.34, percent: 0.30 },
//   { name: "YEN", value: 1.6938, change: -0.02, percent: -1.22 },
//   { name: "NIFTY 50", value: 24311.15, change: -23.05, percent: -0.09 },
//   { name: "NASDAQ", value: 17446.34, change: -14.98, percent: -0.09 },
//   { name: "FTSE", value: 8531.61, change: -27.72, percent: -0.32 },
//   { name: "Nikkei", value: 36830.69, change: 378.39, percent: 1.03 },
// ];

// const LiveTicker: React.FC = () => {
//   const [data, setData] = useState<TickerItem[]>(mockData);

//   // Simulate live updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setData((prev) =>
//         prev.map((item) => ({
//           ...item,
//           value: parseFloat((item.value + Math.random() * 10 - 5).toFixed(2)),
//         }))
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//   <section className="w-full py-2 bg-background/80 font-sans">
//       <div className="container mx-auto px-0">
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-base font-semibold text-gradient">Live Ticker</span>
//           <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
//         </div>
//         <div className="flex overflow-x-auto gap-2 px-0 scrollbar-thin">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[110px] rounded-lg shadow flex flex-col items-center px-2 py-2 border border-white/10 bg-background/90"
//             >
//               <span className="text-[10px] font-medium text-muted-foreground mb-0.5 tracking-wide uppercase">{item.name}</span>
//               <span className="text-base font-bold text-foreground mb-0.5">{item.value}</span>
//               <span
//                 className={`text-xs font-semibold flex items-center gap-1 ${
//                   item.change >= 0 ? "text-green-400" : "text-red-400"
//                 }`}
//               >
//                 {item.change >= 0 ? (
//                   <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L10 8H2L6 2Z" fill="currentColor"/></svg>
//                 ) : (
//                   <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10L2 4H10L6 10Z" fill="currentColor"/></svg>
//                 )}
//                 {item.change} ({item.percent}%)
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LiveTicker;
