import React from "react";
import { FaRegSun, FaCloudRain } from "react-icons/fa";

const WeatherForecast = ({ data, icon }) => {
  return (
    <div>
      {data && (
        <ul>
          {icon === true ? (
            <FaRegSun style={{ color: "tomato", fontSize: 30 }} />
          ) : (
            <FaCloudRain style={{ color: "blue", fontSize: 30 }} />
          )}
          <li>{data && data.temp}</li>
          <li>{data && data.main}</li>
        </ul>
      )}
    </div>
  );
};

export default WeatherForecast;
