import React, {HTMLAttributes, useEffect, useState} from 'react';
import {Model} from "./components/Model";
import {CreateFormWeather} from "./components/CreateFormWeather";
import './App.css'
import {Weather} from "./components/Weather";
import {CreateWeather} from "./hooks/CreateWeather";
import {Loader} from "./components/Loader";
import {WeatherToday} from "./components/WeatherToday";
import {condition} from "./data/condition";

function App() {

    const {forecastDay, onLeftClickHandler, onRightClickHandler, addDataWeather, weatherForeacast, loading, weatherToday} = CreateWeather()
    const [buttonWeekBorder, setButtonWeekBorder] = useState(true)
    const buttonWeekBorderClass = buttonWeekBorder ? 'button-week-withBorder' : 'button-week-withoutBorder'
    const buttonTwoWeekBorderClass = !buttonWeekBorder ? 'button-two-week-withBorder' : 'button-two-week-withoutBorder'
    const [dayCount, setDayCount] = useState(7);

  return (
      <>
            <header className="main-header bg-blue-400">
                <div className="block-header">
                    <Model title="Погода">
                        <CreateFormWeather dayCount={dayCount} addDataWeather={addDataWeather}/>
                    </Model>
                    <div className="button-block">
                        <button
                            className={buttonWeekBorderClass}
                            onClick={() => {
                                setButtonWeekBorder(true);
                                setDayCount(7)
                            }
                            }
                        >Прогноз на неделю</button>
                        <button
                            className={buttonTwoWeekBorderClass}
                            onClick={() => {
                                setButtonWeekBorder(false);
                                setDayCount(14)
                            }
                            }
                        >Прогноз на две недели</button>
                    </div>
                </div>
            </header>
          <div className="content">
              <div className="card-outer-today">
                  {!loading && <WeatherToday text="Сейчас" data={weatherToday}/>}
              </div>

              <div className="card-list">
                  <button
                      className="button-left"
                      onClick={onLeftClickHandler}
                  >{'<'}
                  </button>
                  <div className="scroll-block">
                      {weatherForeacast && forecastDay.map((weather, index) => {
                          let translate:any = condition.find((cond: { code: number | undefined | string | null; }) => cond.code === weather.day.condition.code);
                          weather.day.condition.text = translate.languages[23].day_text;
                          return <Weather forecastday={weather} key={index}/>
                      })}
                      {loading && <Loader/>}
                  </div>
                  <button
                      className="button-right"
                      onClick={onRightClickHandler}
                  >{'>'}
                  </button>
              </div>

          </div>

      </>
  );
}

export default App;
