import { Box, styled } from '@mui/material';
import React from 'react';

interface ServiceCardMoreButtonProps {
  onClick?: () => void;
}

const ButtonGroup = styled(Box)({
  textAlign: 'center',
});

const ButtonWrapper = styled(Box)({
  display: 'inline-block',
});

const StyledMoreButton = styled('button')({
  display: 'flex',
  width: '68px',
  height: '15px',
  fontSize: '0.875rem',
  fontWeight: 500,
  alignItems: 'center',
  gap: '5px',
  color: 'var(--gn-use-color-white)',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
});

const StyledIconArrow = styled('i')({
  position: 'relative',
  width: '30px',
  height: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: 0,

  '&::before': {
    content: '""',
    display: 'block',
    width: '25px',
    height: '5px',
    backgroundColor: 'var(--gn-use-color-white)',
  },

  '&::after': {
    content: '""',
    display: 'block',
    width: '15px',
    height: '15px',
    backgroundColor: 'rgba(134, 134, 134, 1)',
    borderRadius: '15px',
    marginLeft: '-10px',
  },
});

const ServiceCardMoreButton: React.FC<ServiceCardMoreButtonProps> = ({ onClick }) => {
  return (
    <ButtonGroup>
      <ButtonWrapper>
        <StyledMoreButton onClick={onClick}>
          More <StyledIconArrow />
        </StyledMoreButton>
      </ButtonWrapper>
    </ButtonGroup>
  );
};

export default ServiceCardMoreButton;
