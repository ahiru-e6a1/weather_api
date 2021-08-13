import React from "react";
import WeatherIcon from "../components/WeatherIcon";
const WeatherForecast = ({ data, icon }) => {
  return (
    <div>
      {data && (
        <>
          <h2>{data.cityName}</h2>
          <ul style={{ display: "flex" }}>
            <WeatherIcon icon={icon} />
            <li style={{ marginLeft: 30, listStyle: "none" }}>{data.temp}</li>
            <li style={{ marginLeft: 30, listStyle: "none" }}>{data.main}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default WeatherForecast;
