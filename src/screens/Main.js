import React, { useState, useEffect } from "react";
import axios from "axios";
import sampleData from "../api/sampleData";

const K_INDEX = 273.15;
const WEATHER_API_KEY = "ここにAPIKEY";

const Main = () => {
  const [weather, setWeather] = useState({
    cityName: "",
    temp: "",
    main: "",
  });
  const [searchText, setSearchText] = useState("");

  weather !== "" && console.log(weather.cityName);

  // 初期画面用のget
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${WEATHER_API_KEY}`
      )
      .then((res) => {
        const datas = res.data;
        setWeather(() => ({
          cityName: datas.name,
          temp: Math.floor((datas.main.temp - K_INDEX) * 10) / 10,
          main: datas.weather[0].main,
        }));
      });

    // sampleData
    // console.log(sampleData);
    // setWeather(() => ({
    //   cityName: sampleData.name,
    //   temp: Math.floor((sampleData.main.temp - K_INDEX) * 10) / 10,
    //   main: sampleData.weather[0].main,
    // }));
  }, []);

  const searchTextInput = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const searchButton = () => {
    console.log("ボタン押下");
  };

  return (
    // datas !== "" && (
    <div>
      <header className="App-header">
        <h2>{weather && weather.cityName}</h2>
        <span>
          <input
            className="searchTextInput"
            onInput={(e) => searchTextInput(e)}
          ></input>
          <button onClick={() => searchButton()}>検索</button>
        </span>
      </header>
      <div>
        <text></text>
        <ul>
          <li>{weather.temp}</li>
          <li>{weather.main}</li>
        </ul>
      </div>
    </div>
    // )
  );
};

export default Main;
