import { Box, styled } from '@mui/material';
import React from 'react';
import MainVisualBackground from './MainVisualBackground';
import MainVisualContent from './MainVisualContent';

interface MainVisualContainerProps {
  children: React.ReactNode;
}

const VisualContainer = styled(Box)({
  position: 'relative',
});

const MainVisualContainer: React.FC<MainVisualContainerProps> = ({ children }) => {
  return (
    <VisualContainer>
      <MainVisualBackground />
      <MainVisualContent>{children}</MainVisualContent>
    </VisualContainer>
  );
};

export default MainVisualContainer;
