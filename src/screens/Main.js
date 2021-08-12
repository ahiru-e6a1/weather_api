import React, { useState, useEffect } from "react";
import sampleData from "../api/sampleData";
import sampleTokyo from "../api/sampleTokyo";
import WeatherForecast from "./WeatherForecast";

const K_INDEX = 273.15;

const Main = () => {
  const [weather, setWeather] = useState({
    cityName: "",
    temp: "",
    main: "",
  });
  const [searchText, setSearchText] = useState("");
  const [icon, setIcon] = useState(false);

  // 初期画面用のget
  useEffect(() => {
    console.log("初期レンダー searchText");
    // sampleData
    console.log(sampleData);
    setWeather(() => ({
      cityName: sampleData.name,
      temp: Math.floor((sampleData.main.temp - K_INDEX) * 10) / 10,
      main: sampleData.weather[0].main,
    }));
    return;
  }, []);

  // Tokyo選択時の挙動
  useEffect(() => {
    if (searchText !== "") {
      setWeather(() => ({
        cityName: sampleTokyo.name,
        temp: Math.floor((sampleTokyo.main.temp - K_INDEX) * 10) / 10,
        main: sampleTokyo.weather[0].main,
      }));
      sampleTokyo && console.log(sampleTokyo);
    }
  }, [searchText]);

  // 天気のデータ変更時に天気によってiconを変える
  useEffect(() => {
    weather.main !== "Rain" ? setIcon(true) : setIcon(false);
  }, [weather]);

  const searchButton = () => {
    setSearchText("ss");
  };

  return (
    <div>
      <header className="App-header">
        <h1>GetWeatherApi Plactice</h1>
        <span>
          <input className="searchTextInput"></input>
          <button onClick={() => searchButton()}>検索</button>
        </span>
      </header>
      <h2>{weather && weather.cityName}</h2>
      <WeatherForecast data={weather} icon={icon} />
    </div>
  );
};

export default Main;
