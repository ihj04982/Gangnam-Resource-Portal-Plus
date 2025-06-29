import { Typography, styled } from '@mui/material';
import React from 'react';

interface ServiceCardDescriptionProps {
  children: string;
}

const StyledDescription = styled(Typography)({
  fontSize: '0.875rem',
  letterSpacing: '-0.05em',
  color: 'var(--gn-use-color-white)',
  marginBottom: '15px',
  textAlign: 'center',
  lineHeight: '1.25em',
  opacity: 0.85,
}) as typeof Typography;

const ServiceCardDescription: React.FC<ServiceCardDescriptionProps> = ({ children }) => {
  return <StyledDescription component="p" variant="body2" dangerouslySetInnerHTML={{ __html: children }} />;
};

export default ServiceCardDescription;
