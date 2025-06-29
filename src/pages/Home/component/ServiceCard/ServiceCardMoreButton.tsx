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
    height: '8px',
    WebkitMask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='7'%3E%3Cpath d='M24.296.88a1 1 0 0 0-1.416 1.414L25.58 5H1.5a1 1 0 0 0 0 2H28a1 1 0 0 0 .663-1.748 1.03 1.03 0 0 0-.052-.057L24.296.88Z'/%3E%3C/svg%3E") no-repeat center / contain`,
    WebkitMaskComposite: 'source-in',
    mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='7'%3E%3Cpath d='M24.296.88a1 1 0 0 0-1.416 1.414L25.58 5H1.5a1 1 0 0 0 0 2H28a1 1 0 0 0 .663-1.748 1.03 1.03 0 0 0-.052-.057L24.296.88Z'/%3E%3C/svg%3E") no-repeat center / contain`,
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
