import axios from 'axios';
import { PUBLIC_DATA_BASE_URL } from '../configs/commonConfigs';
import { PUBLIC_DATA_DECODING_API_KEY } from '../configs/authConfigs';

const publicDataApi = axios.create({
  baseURL: PUBLIC_DATA_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `infuser ${PUBLIC_DATA_DECODING_API_KEY}`,
  },
});

publicDataApi.interceptors.request.use((config) => {
  config.headers.Authorization = `infuser ${PUBLIC_DATA_DECODING_API_KEY}`;
  return config;
});

export default publicDataApi;
