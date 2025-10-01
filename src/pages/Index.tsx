import { CurrentWeather } from "@/components/CurrentWeather";
import { DailyForecast } from "@/components/DailyForecast";
import { HourlyForecast } from "@/components/HourlyForecast";
import { WeatherDetails } from "@/components/WeatherDetails";
import { mockWeatherData } from "@/data/mockWeatherData";
import { MapPin, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 glass-card">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Current Location</p>
              <span className="font-semibold text-lg text-foreground">{mockWeatherData.location}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            className="glass-card hover:bg-white/10 text-foreground"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Current Weather - Hero Card */}
          <div className="lg:col-span-8 card-primary p-10 rounded-[var(--radius-xl)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            </div>
            <CurrentWeather
              temperature={mockWeatherData.current.temperature}
              condition={mockWeatherData.current.condition}
              description={mockWeatherData.current.description}
              location={mockWeatherData.location}
            />
          </div>

          {/* 5 Day Forecast */}
          <div className="lg:col-span-4 space-y-4">
            <DailyForecast forecasts={mockWeatherData.daily} />
          </div>

          {/* Weather Details */}
          <div className="lg:col-span-8">
            <WeatherDetails
              humidity={mockWeatherData.current.humidity}
              windSpeed={mockWeatherData.current.windSpeed}
              windDirection={mockWeatherData.current.windDirection}
              uvIndex={mockWeatherData.current.uvIndex}
              visibility={mockWeatherData.current.visibility}
              pressure={mockWeatherData.current.pressure}
            />
          </div>

          {/* Hourly Forecast */}
          <div className="lg:col-span-4">
            <HourlyForecast forecasts={mockWeatherData.hourly} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;