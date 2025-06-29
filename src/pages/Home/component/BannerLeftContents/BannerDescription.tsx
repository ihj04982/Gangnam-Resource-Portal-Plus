import { Box, styled } from '@mui/material';
import React from 'react';

interface BannerDescriptionProps {
  children: React.ReactNode;
}

const StyledDescription = styled(Box)({
  fontSize: '1.480rem',
  color: 'var(--gn-use-color-white)',
  letterSpacing: '-0.025em',
  lineHeight: '1.25em',
});

const BannerDescription: React.FC<BannerDescriptionProps> = ({ children }) => {
  return <StyledDescription className="desc">{children}</StyledDescription>;
};

export default BannerDescription;
