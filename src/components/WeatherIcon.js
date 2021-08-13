import React from "react";
import { FaRegSun, FaCloudRain } from "react-icons/fa";

const WeatherIcon = ({ icon }) => {
  return (
    <div>
      {icon === true ? (
        <FaRegSun style={{ color: "tomato", fontSize: 30 }} />
      ) : (
        <FaCloudRain style={{ color: "blue", fontSize: 30 }} />
      )}
    </div>
  );
};

export default WeatherIcon;
