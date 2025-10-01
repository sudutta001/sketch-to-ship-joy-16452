import { Cloud, CloudDrizzle, CloudRain, CloudSnow, Sun, Wind, Zap } from "lucide-react";
import { WeatherCondition } from "@/types/weather";

interface CurrentWeatherProps {
  temperature: number;
  condition: WeatherCondition;
  description: string;
  location: string;
}

const weatherIcons: Record<WeatherCondition, React.ReactNode> = {
  sunny: <Sun className="w-40 h-40 text-white drop-shadow-2xl animate-float" />,
  'partly-cloudy': <Cloud className="w-40 h-40 text-white/90 drop-shadow-2xl animate-float" />,
  cloudy: <Cloud className="w-40 h-40 text-white/80 drop-shadow-2xl animate-float" />,
  rainy: <CloudRain className="w-40 h-40 text-white/90 drop-shadow-2xl animate-float" />,
  stormy: <Zap className="w-40 h-40 text-yellow-300 drop-shadow-2xl animate-float" />,
  snowy: <CloudSnow className="w-40 h-40 text-white drop-shadow-2xl animate-float" />,
  foggy: <CloudDrizzle className="w-40 h-40 text-white/70 drop-shadow-2xl animate-float" />,
  windy: <Wind className="w-40 h-40 text-white/80 drop-shadow-2xl animate-float" />,
};

export function CurrentWeather({ temperature, condition, description }: CurrentWeatherProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm mb-2">{currentDate}</p>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-9xl font-thin text-white tracking-tighter">{temperature}</span>
            <span className="text-4xl text-white/80 font-light">°C</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl capitalize text-white font-light">{description}</p>
            <p className="text-white/60">Feels like {temperature - 2}°</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {weatherIcons[condition]}
        </div>
      </div>
    </div>
  );
}