import {useEffect, useState} from "react";
import {IForecastDay, IWeather} from "../models";
import {condition} from "../data/condition";



export function CreateWeather(){
    const [forecastDay, setForecastDay] = useState<IForecastDay[]>([])
    const [weatherForeacast, setWeatherForeacast] = useState(false)
    const [loading, setLoading] = useState(true)
    const [weatherToday, setWeatherToday] = useState<IWeather>({});




    const addDataWeather = (weather:IWeather) =>{
        setForecastDay(weather.forecast?.forecastday as IForecastDay[])
        let translate:any = condition.find((cond: { code: number | undefined | string | null; }) => cond.code === weather.current?.condition.code)
        if(weather.current){
            weather.current.condition.text = translate['languages'][23].day_text
        }

        setWeatherToday(weather)
        setWeatherForeacast(true)
        setLoading(false)

    }
    // useEffect(() =>{
    //     setForecastDay(data.forecast.forecastday as [])
    // }, [])

    const scrollBlock = document.querySelector('.scroll-block');
    const onLeftClickHandler = () => {
        scrollBlock?.scrollBy(-50, 0);
    }
    const onRightClickHandler = () => {
        scrollBlock?.scrollBy(50, 0);
    }

    return {forecastDay, addDataWeather, onLeftClickHandler, onRightClickHandler, weatherForeacast, loading, weatherToday};
}