import { Typography, styled } from '@mui/material';
import React from 'react';

interface ServiceCardTitleProps {
  children: React.ReactNode;
}

const StyledTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
  marginBottom: '12px',
  color: 'var(--gn-use-color-white)',
  textAlign: 'center',
}) as typeof Typography;

const ServiceCardTitle: React.FC<ServiceCardTitleProps> = ({ children }) => {
  return (
    <StyledTitle component="h4" variant="h6">
      {children}
    </StyledTitle>
  );
};

export default ServiceCardTitle;
