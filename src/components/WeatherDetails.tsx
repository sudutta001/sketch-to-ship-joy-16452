import { Droplets, Eye, Gauge, Navigation, Sun, Wind, Thermometer, CloudRain } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: number;
  visibility: number;
  pressure: number;
}

export function WeatherDetails({
  humidity,
  windSpeed,
  windDirection,
  uvIndex,
  visibility,
  pressure,
}: WeatherDetailsProps) {
  const getUVLevel = (index: number) => {
    if (index <= 2) return { text: "Low", color: "text-green-400" };
    if (index <= 5) return { text: "Moderate", color: "text-yellow-400" };
    if (index <= 7) return { text: "High", color: "text-orange-400" };
    return { text: "Very High", color: "text-red-400" };
  };

  const uvLevel = getUVLevel(uvIndex);

  const detailCards = [
    {
      icon: <Wind className="w-6 h-6" />,
      label: "Wind Speed",
      value: windSpeed,
      unit: "km/h",
      subValue: windDirection,
      color: "text-primary",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      label: "Humidity",
      value: humidity,
      unit: "%",
      hasProgress: true,
      color: "text-primary",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      label: "UV Index",
      value: uvIndex,
      subValue: uvLevel.text,
      color: uvLevel.color,
    },
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Visibility",
      value: visibility,
      unit: "km",
      color: "text-primary",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      label: "Pressure",
      value: pressure,
      unit: "mb",
      color: "text-primary",
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      label: "Precipitation",
      value: 15,
      unit: "%",
      hasProgress: true,
      color: "text-primary",
    },
  ];

  return (
    <div className="glass-card p-8">
      <h3 className="text-lg font-semibold mb-8 text-gradient">Weather Insights</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {detailCards.map((detail, index) => (
          <div key={index} className="glass-card p-4 hover-lift group">
            <div className="flex items-start gap-3">
              <div className={`${detail.color} p-2 glass-card group-hover:scale-110 transition-transform`}>
                {detail.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">{detail.value}</span>
                  {detail.unit && <span className="text-sm text-muted-foreground">{detail.unit}</span>}
                </div>
                {detail.subValue && (
                  <p className={`text-xs mt-1 ${detail.color || 'text-muted-foreground'}`}>
                    {detail.subValue}
                  </p>
                )}
                {detail.hasProgress && (
                  <Progress value={detail.value as number} className="mt-2 h-1" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}