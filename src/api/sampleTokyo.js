const sampleTokyo = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 520,
      main: "Rain",
      description: "Rain",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 299.97,
    feels_like: 302.41,
    temp_min: 297.54,
    temp_max: 300.73,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Tokyo",
  cod: 200,
};

export default sampleTokyo;
