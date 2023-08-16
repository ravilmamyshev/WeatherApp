import { IWeather } from "../models";
import { text } from "stream/consumers";

interface IWeatherToday {
  data: IWeather;
  text: string;
}
export function WeatherToday({ data, text }: IWeatherToday) {
  return (
    <div className="card-today">
      <h2 className="text-center">
        {text}, {data.location?.localtime.split(" ")[1]}
      </h2>
      <h2 className="card-location">
        {data.location?.name} <span>{data.location?.country}</span>
      </h2>
      <div className="weather-today">
        <div className="card-value-today">
          {data.current?.temp_c}
          <sup>℃</sup>
        </div>
        <img
          className="card-img-today"
          src={data.current?.condition.icon}
          alt="weather"
        />
      </div>
      <div className="card-description-today text-center">
        {data.current?.condition.text}
      </div>
    </div>
  );
}
