import { Typography, styled } from '@mui/material';
import React from 'react';

interface BannerTitleProps {
  children: React.ReactNode;
}

const StyledTitle = styled(Typography)({
  fontSize: '3.125rem',
  color: 'var(--gn-use-color-white)',
  lineHeight: '1.25em',
  marginBottom: '20px',
}) as typeof Typography;

const BannerTitle: React.FC<BannerTitleProps> = ({ children }) => {
  return (
    <StyledTitle component="h3" variant="h3">
      {children}
    </StyledTitle>
  );
};

export default BannerTitle;
