import React, { useState, useEffect } from "react";
import axios from "axios";

const K_INDEX = 273.15;

const Main = () => {
  const [datas, setDates] = useState("");
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("");

  datas !== "" && console.log(datas);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${WEATHER_API_KEY}`
      )
      .then((res) => {
        const datas = res.data;
        setDates(datas);
        const temp = Math.floor((datas.main.temp - K_INDEX) * 10) / 10;
        const weather = datas.weather[0].main;
        setTemp(temp);
        setWeather(weather);
      });
  }, []);

  return (
    <div>
      <header className="App-header">
        <h2>{datas && datas.name}</h2>
      </header>
      <ul>
        <li>{temp}</li>
        <li>{weather}</li>
      </ul>
    </div>
  );
};

export default Main;
