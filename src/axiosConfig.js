import axios from "axios";
const instance = axios.create({
  baseURL: 'https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/31.0409,%2031.3785',
  timeout: 1000,
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
});

export default instance


