import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const LiveMarket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const marketData = [
    { name: "SENSEX", value: "80752.3", change: "+250.31", percentage: "+0.31%", isPositive: true },
    { name: "GOLD", value: "99183", change: "+540", percentage: "+0.54%", isPositive: true },
    { name: "SILVER", value: "102200", change: "+1200.00", percentage: "+1.17%", isPositive: true },
    { name: "Crude", value: "5097", change: "+157.00", percentage: "+3.08%", isPositive: true },
    { name: "USD/INR", value: "85.831", change: "-0.17", percentage: "-0.20%", isPositive: false },
    { name: "EURO", value: "96.5851", change: "+0.18", percentage: "+0.18%", isPositive: true },
    { name: "UK", value: "114.067", change: "+0.34", percentage: "+0.30%", isPositive: true },
    { name: "YEN", value: "1.6938", change: "-0.02", percentage: "-1.22%", isPositive: false },
    { name: "NIFTY 50", value: "24311.15", change: "-23.05", percentage: "-0.09%", isPositive: false },
    { name: "NASDAQ", value: "17446.34", change: "-14.98", percentage: "-0.09%", isPositive: false },
    { name: "FTSE", value: "8531.61", change: "-27.72", percentage: "-0.32%", isPositive: false },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-24 z-50 h-14 w-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ background: isOpen ? '#393b6e' : '#2e3060' }}
          onMouseEnter={e => e.currentTarget.style.background = '#393b6e'}
          onMouseLeave={e => e.currentTarget.style.background = isOpen ? '#393b6e' : '#2e3060'}
          aria-label="View live market data"
        >
          <BarChart3 className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[95vw] max-w-4xl p-4 bg-background/95 backdrop-blur-sm border shadow-2xl" 
        side="top" 
        align="end"
        sideOffset={10}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b">
            <BarChart3 className="h-5 w-5 text-[#2e3060]" />
            <h3 className="font-semibold text-lg">Live Market Data</h3>
          </div>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 min-w-max">
              {marketData.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-colors border border-border/50 min-w-[140px]"
                >
                  <p className="font-medium text-xs text-muted-foreground mb-1">{item.name}</p>
                  <p className="text-lg font-bold mb-2 text-center">{item.value}</p>
                  <div className="flex items-center gap-1">
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      item.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.isPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      <span className="text-xs">{item.change}</span>
                    </div>
                  </div>
                  <p className={`text-xs mt-1 ${
                    item.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-3 border-t text-xs text-muted-foreground text-center">
            Data updates in real-time
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LiveMarket;