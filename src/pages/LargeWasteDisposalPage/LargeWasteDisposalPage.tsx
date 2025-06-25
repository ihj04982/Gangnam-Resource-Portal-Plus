import { Box, Button, Typography } from '@mui/material';

const LargeWasteDisposalPage = () => {
  return (

    <div style={{ padding: '24px' }}>
        <Typography variant="h5" gutterBottom>
            대형생활폐기물 배출
          </Typography>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 1, p: 3, backgroundColor: '#e8f5e9' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              대형생활폐기물이란?
            </Typography>
            <Typography gutterBottom>
              폐가전제품, 이불, 가구, 사무용 자재 등 <strong>크기와 관계없이</strong> 종량제 봉투에 담을 수 없고{' '}
              <strong>분리배출 할 수 없는 폐기물</strong>
            </Typography>
            <Button variant="contained" color="success" sx={{ mt: 2 }}>
              수거대상 물품/수수료 확인
            </Button>
            <Typography sx={{ mt: 2, fontSize: 14, color: '#555' }}>
              ※ 버리실 품목이 목록에 없는 경우 유사한 품목으로 선택해 주시거나 기타로 선택 후 고객요청 사항에 품목명,
              수량을 기재해 주세요.
            </Typography>
          </Box>
          
    </div>
  );
};

export default LargeWasteDisposalPage;
