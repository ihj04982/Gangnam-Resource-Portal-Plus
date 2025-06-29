import { Box, styled } from '@mui/material';
import React from 'react';

interface ServiceCardGridProps {
  children: React.ReactNode;
}

const GridContainer = styled(Box)({
  display: 'flex',
  gap: '1vw',
  justifyContent: 'space-between',
});

const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default ServiceCardGrid;
