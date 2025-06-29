import { createTheme } from '@mui/material/styles';

// 추가 색상 상수들 (기존 MUI 팔레트와 함께 사용)
export const COLORS = {
  // GN(강남구) 사용 색상들 - MUI 팔레트와 통합
  GN_USE_COLOR_1: '#222222', // 가장 진한 텍스트
  GN_USE_COLOR_2: '#1a1a1a', // 진한 텍스트
  GN_USE_COLOR_3: '#666666', // 기본 텍스트 (theme.palette.text.primary와 동일)
  GN_USE_COLOR_4: '#888888', // 연한 텍스트
  GN_USE_COLOR_5: '#C8C8C8', // 매우 연한 텍스트
  GN_USE_COLOR_6: '#707070', // 중간 회색
  GN_USE_COLOR_7: '#EDEDED', // 밝은 회색 배경
  GN_USE_COLOR_8: '#777777', // 중간 진한 회색
  GN_USE_COLOR_9: '#ededed', // 밝은 회색 배경 (소문자)
  GN_USE_COLOR_10: '#f5f5f5', // 매우 밝은 회색 배경
  GN_USE_COLOR_WHITE: '#FFFFFF', // 흰색 (theme.palette.background.default와 동일)
  GN_USE_COLOR_BLACK: '#000000', // 검정색

  // 배경색
  BACKGROUND_GRAY: '#F0F0F0',

  // 기존 MUI 색상들도 함께 관리
  PRIMARY_GREEN: '#217A2B',
  SECONDARY_LIGHT_GREEN: '#93C03D',
} as const;

// CSS 변수 스타일 (기존 시스템과 호환)
export const CSS_VARIABLES = {
  '--gn-use-color-1': COLORS.GN_USE_COLOR_1,
  '--gn-use-color-2': COLORS.GN_USE_COLOR_2,
  '--gn-use-color-3': COLORS.GN_USE_COLOR_3,
  '--gn-use-color-4': COLORS.GN_USE_COLOR_4,
  '--gn-use-color-5': COLORS.GN_USE_COLOR_5,
  '--gn-use-color-6': COLORS.GN_USE_COLOR_6,
  '--gn-use-color-7': COLORS.GN_USE_COLOR_7,
  '--gn-use-color-8': COLORS.GN_USE_COLOR_8,
  '--gn-use-color-9': COLORS.GN_USE_COLOR_9,
  '--gn-use-color-10': COLORS.GN_USE_COLOR_10,
  '--gn-use-color-white': COLORS.GN_USE_COLOR_WHITE,
  '--gn-use-color-black': COLORS.GN_USE_COLOR_BLACK,
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
