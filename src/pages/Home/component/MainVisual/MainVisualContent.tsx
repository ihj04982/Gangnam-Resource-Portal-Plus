import { Box, styled } from '@mui/material';
import React from 'react';

interface MainVisualContentProps {
  children: React.ReactNode;
}

const ContentContainer = styled(Box)({
  fontFamily: 'Pretendard, NotoSansKR, sans-serif',
  lineHeight: '1.45em',
  color: '#666666',
  padding: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  maxWidth: '1400px',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  paddingTop: 0,
});

const MainVisualContent: React.FC<MainVisualContentProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default MainVisualContent;
