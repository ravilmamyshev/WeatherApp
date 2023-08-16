import "./CreateFormWeather.css";
import React, { useState } from "react";
import { IWeather } from "../models";
import { ErrorMessage } from "./ErrorMessage";
import { Axios, AxiosError } from "axios";
import { logDOM } from "@testing-library/react";
interface ICreateFormWeather {
  addDataWeather: (weather: IWeather) => void;
  dayCount: number;
}
export function CreateFormWeather({
  addDataWeather,
  dayCount,
}: ICreateFormWeather) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const api = "8974826df85646d89d5150244231508";

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const getWeatherData = async () => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${value}&days=${dayCount}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if ("error" in data) {
      setError(data.error.message);
    } else {
      addDataWeather(data);
    }
  };
  function submitHandler(event: React.FormEvent) {
    try {
      event.preventDefault();
      setError("");
      if (value.trim().length === 0) {
        setError("Введите правильное название города");
        return;
      }
      getWeatherData();
    } catch (err: unknown) {
      const error = err as AxiosError;
      setError(error.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="block-form">
        <input
          type="text"
          placeholder="Введите название города..."
          className="w-[300px] px-4 py-2 border"
          value={value}
          onChange={changeHandler}
        />
        <button type="submit" className="px-4 py-2 bg-yellow-600">
          Найти
        </button>
      </div>

      {error && <ErrorMessage message={error} />}
    </form>
  );
}
