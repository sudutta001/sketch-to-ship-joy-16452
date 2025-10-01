export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    condition: WeatherCondition;
    description: string;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    uvIndex: number;
    visibility: number;
    pressure: number;
  };
  hourly: HourlyForecast[];
  daily: DailyForecast[];
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  condition: WeatherCondition;
}

export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  condition: WeatherCondition;
  description: string;
}

export type WeatherCondition = 
  | 'sunny'
  | 'partly-cloudy'
  | 'cloudy'
  | 'rainy'
  | 'stormy'
  | 'snowy'
  | 'foggy'
  | 'windy';