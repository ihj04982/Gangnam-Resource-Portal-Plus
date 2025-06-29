import { Box, styled } from '@mui/material';
import React from 'react';
import mainVisualImg from '../../../../assets/img/main_top_visual_img_01.jpg';

const BackgroundContainer = styled(Box)({
  fontFamily: 'Pretendard, NotoSansKR, sans-serif',
  lineHeight: '1.45em',
  color: '#666666',
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
  boxSizing: 'border-box',
  width: '100%',
  height: '32vw',
  maxHeight: '534px',
  minHeight: '534px',
  background: `url(${mainVisualImg}) no-repeat center center / cover`,
});

const MainVisualBackground: React.FC = () => {
  return <BackgroundContainer />;
};

export default MainVisualBackground;
