import { Cloud, CloudDrizzle, CloudRain, CloudSnow, Sun, Wind, Zap } from "lucide-react";
import { DailyForecast as DailyForecastType, WeatherCondition } from "@/types/weather";

interface DailyForecastProps {
  forecasts: DailyForecastType[];
}

const weatherIconsMedium: Record<WeatherCondition, React.ReactNode> = {
  sunny: <Sun className="w-8 h-8 text-primary" />,
  'partly-cloudy': <Cloud className="w-8 h-8 text-muted-foreground" />,
  cloudy: <Cloud className="w-8 h-8 text-muted-foreground" />,
  rainy: <CloudRain className="w-8 h-8 text-primary" />,
  stormy: <Zap className="w-8 h-8 text-accent" />,
  snowy: <CloudSnow className="w-8 h-8 text-primary" />,
  foggy: <CloudDrizzle className="w-8 h-8 text-muted-foreground" />,
  windy: <Wind className="w-8 h-8 text-muted-foreground" />,
};

export function DailyForecast({ forecasts }: DailyForecastProps) {
  return (
    <div className="glass-card p-6 h-full">
      <h3 className="text-lg font-semibold mb-6 text-gradient">Weekly Forecast</h3>
      <div className="space-y-3">
        {forecasts.map((forecast, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-[var(--radius)] hover:bg-white/5 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                {weatherIconsMedium[forecast.condition]}
              </div>
              <div>
                <p className="font-medium text-foreground">{forecast.day}</p>
                <p className="text-sm text-muted-foreground capitalize">{forecast.description}</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-foreground">{forecast.high}°</span>
              <span className="text-sm text-muted-foreground">{forecast.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}