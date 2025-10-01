import { Cloud, CloudDrizzle, CloudRain, CloudSnow, Sun, Wind, Zap } from "lucide-react";
import { HourlyForecast as HourlyForecastType, WeatherCondition } from "@/types/weather";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HourlyForecastProps {
  forecasts: HourlyForecastType[];
}

const weatherIconsSmall: Record<WeatherCondition, React.ReactNode> = {
  sunny: <Sun className="w-6 h-6 text-primary" />,
  'partly-cloudy': <Cloud className="w-6 h-6 text-muted-foreground" />,
  cloudy: <Cloud className="w-6 h-6 text-muted-foreground" />,
  rainy: <CloudRain className="w-6 h-6 text-primary" />,
  stormy: <Zap className="w-6 h-6 text-accent" />,
  snowy: <CloudSnow className="w-6 h-6 text-primary" />,
  foggy: <CloudDrizzle className="w-6 h-6 text-muted-foreground" />,
  windy: <Wind className="w-6 h-6 text-muted-foreground" />,
};

export function HourlyForecast({ forecasts }: HourlyForecastProps) {
  return (
    <div className="glass-card p-6 h-full">
      <h3 className="text-lg font-semibold mb-6 text-gradient">Today's Timeline</h3>
      <ScrollArea className="w-full">
        <div className="grid grid-cols-2 gap-3">
          {forecasts.slice(0, 8).map((forecast, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-[var(--radius)] hover:bg-white/5 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                  {weatherIconsSmall[forecast.condition]}
                </div>
                <span className="text-sm text-muted-foreground">{forecast.time}</span>
              </div>
              <span className="text-lg font-semibold text-foreground">{forecast.temperature}°</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}