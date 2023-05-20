import { WeatherCurrent } from "./weather_current";
import { WeatherLocation } from "./weather_location";

export interface Weather {
    location: WeatherLocation,
    current: WeatherCurrent
}