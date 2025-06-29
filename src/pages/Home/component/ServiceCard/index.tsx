import { Box, styled } from '@mui/material';
import React from 'react';
import ServiceCardDescription from './ServiceCardDescription';
import ServiceCardIcon from './ServiceCardIcon';
import ServiceCardMoreButton from './ServiceCardMoreButton';
import ServiceCardTitle from './ServiceCardTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  onMoreClick?: () => void;
}

const CardContainer = styled(Box)({
  flex: 1,
});

const CardContent = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.45)',
  width: '100%',
  borderRadius: '20px',
  padding: '30px 28px 45px',
});

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onMoreClick }) => {
  return (
    <CardContainer>
      <CardContent>
        <ServiceCardIcon>{icon}</ServiceCardIcon>
        <ServiceCardTitle>{title}</ServiceCardTitle>
        <ServiceCardDescription>{description}</ServiceCardDescription>
        <ServiceCardMoreButton onClick={onMoreClick} />
      </CardContent>
    </CardContainer>
  );
};

export default ServiceCard;
