import { Box, styled } from '@mui/material';
import React from 'react';

interface ServiceCardIconProps {
  children: React.ReactNode;
}

const IconContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: '14px',
});

const ServiceCardIcon: React.FC<ServiceCardIconProps> = ({ children }) => {
  return <IconContainer>{children}</IconContainer>;
};

export default ServiceCardIcon;
