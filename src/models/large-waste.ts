export interface WasteFeeItem {
  시도명: string;
  시군구명: string;
  대형폐기물명: string;
  대형폐기물구분명: string;
  대형폐기물규격: string;
  유무료여부: string;
  수수료: string;
  관리기관명: string;
  데이터기준일자: string;
  제공기관코드: string;
  제공기관명: string;
}

export function filterByRegion<T extends { 시도명: string; 시군구명: string }>(
  data: T[],
  city: string,
  sigungoo: string,
): T[] {
  return data.filter((item) => item.시도명 === city && item.시군구명 === sigungoo);
}
