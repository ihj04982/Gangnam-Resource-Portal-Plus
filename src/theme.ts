import { createTheme } from '@mui/material/styles';

// 추가 색상 상수들 (기존 MUI 팔레트와 함께 사용)
export const COLORS = {
  // GN(강남구) 사용 색상들 - MUI 팔레트와 통합
  GN_USE_COLOR_2: '#1a1a1a', // 진한 텍스트
  GN_USE_COLOR_3: '#666666', // 기본 텍스트 (theme.palette.text.primary와 동일)
  GN_USE_COLOR_WHITE: '#FFFFFF', // 흰색 (theme.palette.background.default와 동일)

  // 배경색
  BACKGROUND_GRAY: '#F0F0F0',

  // 기존 MUI 색상들도 함께 관리
  PRIMARY_GREEN: '#217A2B',
  SECONDARY_LIGHT_GREEN: '#93C03D',
} as const;

// CSS 변수 스타일 (기존 시스템과 호환)
export const CSS_VARIABLES = {
  '--gn-use-color-2': COLORS.GN_USE_COLOR_2,
  '--gn-use-color-3': COLORS.GN_USE_COLOR_3,
  '--gn-use-color-white': COLORS.GN_USE_COLOR_WHITE,
} as const;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.PRIMARY_GREEN,
    },
    secondary: {
      main: COLORS.SECONDARY_LIGHT_GREEN,
    },
    background: {
      default: COLORS.GN_USE_COLOR_WHITE,
      paper: '#f2f2f2',
    },
    text: {
      primary: COLORS.GN_USE_COLOR_3,
      secondary: '#888888',
    },
  },
  typography: {
    fontFamily: 'Pretendard, NotoSansKR, sans-serif',
    fontSize: 16,
    body1: {
      lineHeight: 1.45,
    },
    body2: {
      lineHeight: 1.45,
    },
  },
});

export default theme;
