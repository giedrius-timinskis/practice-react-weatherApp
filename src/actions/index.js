import axios from 'axios';

const WEATHER_API_KEY = 'f3d27942b769ed34523b096226b7ae0a';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    // TODO: hardcoded country code for now
    const url = `${WEATHER_ROOT_URL}&q=${city},us`;
    // Make a request to openweathermap api
    const req = axios.get(url);
    // return action
    return {
        type: FETCH_WEATHER,
        payload: req
    }
}
