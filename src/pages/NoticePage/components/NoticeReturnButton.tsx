import { Box, Button } from '@mui/material';

interface NoticeReturnButtonProps {
  onClick: () => void;
}

const NoticeReturnButton = ({ onClick }: NoticeReturnButtonProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: '2rem' }}>
      <Button variant="outlined" onClick={onClick}>
        목록
      </Button>
    </Box>
  );
};

export default NoticeReturnButton;
