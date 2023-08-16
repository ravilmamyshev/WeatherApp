import './CreateFormWeather.css'
interface INewWeather{
    forecastday:{
            date: string,
            day:{
                maxtemp_c: number,
                mintemp_c: number,
                condition:{
                    code: number,
                    icon: string,
                    text: string
                },
                [dayProp: string]:any;
            }
            [forecastdayProp: string]:any;
        }
}
export function Weather({forecastday}: INewWeather){
    return(
        <div className="card">
            <h2>{forecastday.date}</h2>
            <img src={forecastday.day.condition.icon} alt="погода" className="card-img"/>
            <div className="card-value">{`${forecastday.day.mintemp_c}℃ - ${forecastday.day.maxtemp_c}℃`}</div>
            <div className="card-description">{forecastday.day.condition.text}</div>
        </div>
    )
}