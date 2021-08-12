import sampleData from "../api/sampleData";

export const GetWeatherApi = () => {
  console.log("get");
  return GetWeatherApi;
};

export const searchWeatherApi = () => {
  console.log("2回目行こう");
  console.log(sampleData);
  return;
};

// const WEATHER_API_KEY = "159a7cbaf4b4bed1fe3b70759451ff8a";

// GetWeatherApi();
// axios
//   .get(
//     `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${WEATHER_API_KEY}`
//   )
//   .then((res) => {
//     const datas = res.data;
//     console.log("datas", datas);
//     setWeather(() => ({
//       cityName: datas.name,
//       temp: Math.floor((datas.main.temp - K_INDEX) * 10) / 10,
//       main: datas.weather[0].main,
//     }));
//   });
