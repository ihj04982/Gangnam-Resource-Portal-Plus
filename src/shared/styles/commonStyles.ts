import { COLORS } from '../../theme';

// 기본 리셋 스타일
export const BASE_RESET_STYLE = {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
  boxSizing: 'border-box' as const,
};

// 기본 폰트 및 색상 스타일
export const BASE_FONT_STYLE = {
  fontFamily: 'Pretendard, NotoSansKR, sans-serif',
  lineHeight: '1.45em',
  color: COLORS.GN_USE_COLOR_3,
};

// 컨테이너 스타일
export const CONTAINER_STYLE = {
  ...BASE_RESET_STYLE,
  ...BASE_FONT_STYLE,
  margin: '0 auto',
  width: '100%',
  maxWidth: '1400px',
  padding: '0 20px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

// 섹션 스타일
export const SECTION_STYLE = {
  ...BASE_RESET_STYLE,
  ...BASE_FONT_STYLE,
  position: 'relative' as const,
  paddingTop: '60px',
  paddingBottom: '60px',
};

// Flex 리스트 스타일
export const FLEX_LIST_STYLE = {
  ...BASE_RESET_STYLE,
  ...BASE_FONT_STYLE,
  listStyle: 'none',
  display: 'flex',
  gap: '1.5vw',
  justifyContent: 'space-between' as const,
};
