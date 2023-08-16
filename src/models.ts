export interface IWeather{
    current?:{
        condition:{
            code: number,
            icon: string,
            text: string
        }
        temp_c: number,
        [currentProp: string]:any;
    }
    forecast?:{
        forecastday:{
            [index: number]:{
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

    }
    location?:{
        country: string,
        name: string,
        region: string,
        localtime: string,
        [locationProp: string]:any;
    }

}
export interface IForecastDay{
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
