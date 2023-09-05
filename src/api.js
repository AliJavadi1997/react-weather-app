const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0fcab3e08fmshecc0c45838e340fp1908f5jsn0fede6cf989b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "9ee658b4ddf75790c44d1e76e2529fab";
export { geoApiOptions, GEO_API_URL, WEATHER_API_KEY, WEATHER_API_URL };
