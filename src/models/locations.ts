export interface WasteBagLocation {
  판매처명: string;
  주소: string;
  데이터기준일: string;
}

export interface ClothingCollectionLocation {
  연번: number;
  지번주소: string;
  '도로명 주소': string;
  위도: string;
  경도: string;
}

export interface CigaretteButtLocation {
  동명: string;
  설치주소: string;
  '위 치': string;
}

export interface FluorescentBatteryLocation {
  동명: string;
  설치위치: string;
  수거품목: string;
  관리기관명: string;
  관리기관전화번호: string;
  데이터기준일: string;
}

export interface LocationApiResponse<T> {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: T[];
}
