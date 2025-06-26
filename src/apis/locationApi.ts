import { PUBLIC_DATA_DECODING_API_KEY } from '../configs/authConfigs';
import publicDataApi from '../utils.ts/publicDataApi';
import type {
  WasteBagLocation,
  ClothingCollectionLocation,
  CigaretteButtLocation,
  FluorescentBatteryLocation,
  ILocationApiResponse,
} from '../models/locations';

export const getFluorescentBattery = async (
  page = 1,
  perPage = 10,
): Promise<ILocationApiResponse<FluorescentBatteryLocation>> => {
  const response = await publicDataApi.get('/15038090/v1/uddi:254381dc-ecce-413b-a222-d70a2fceb2cd', {
    params: {
      page,
      perPage,
      serviceKey: PUBLIC_DATA_DECODING_API_KEY,
    },
  });
  return response.data;
};

export const getWasteBag = async (page = 1, perPage = 10): Promise<ILocationApiResponse<WasteBagLocation>> => {
  const response = await publicDataApi.get('/15113123/v1/uddi:2fc8d9bc-08f6-4b0d-90b2-94d4a834e82d', {
    params: {
      page,
      perPage,
      serviceKey: PUBLIC_DATA_DECODING_API_KEY,
    },
  });
  return response.data;
};

export const getCigaretteButt = async (
  page = 1,
  perPage = 10,
): Promise<ILocationApiResponse<CigaretteButtLocation>> => {
  const response = await publicDataApi.get('/15103349/v1/uddi:06daef13-9cbe-463d-b7b4-b80b1b3ab815', {
    params: {
      page,
      perPage,
      serviceKey: PUBLIC_DATA_DECODING_API_KEY,
    },
  });
  return response.data;
};

export const getClothingCollection = async (
  page = 1,
  perPage = 10,
): Promise<ILocationApiResponse<ClothingCollectionLocation>> => {
  const response = await publicDataApi.get('/15127131/v1/uddi:a9873b46-9551-407a-aff5-a3a77befb3d4', {
    params: {
      page,
      perPage,
      serviceKey: PUBLIC_DATA_DECODING_API_KEY,
    },
  });
  return response.data;
};
