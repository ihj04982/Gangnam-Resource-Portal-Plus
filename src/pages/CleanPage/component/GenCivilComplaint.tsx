import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

function GenCivilComplaint() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            backgroundColor: '#4CAF50', // Green color from the image
            mr: 1,
          }}
        />
        청소대행 범위
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="cleaning scope table" className="mTable">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell align="center" sx={{ fontWeight: 'bold', width: '10%' }}>
                연번
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', width: '20%' }}>
                구분
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', width: '70%' }}>
                과업내용
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">
                <Typography>가로 청소</Typography>
                <Typography variant="body2" color="text.secondary">
                  (12m이상 도로)
                </Typography>
              </TableCell>
              <TableCell>
                먼지흡입·노면청소 작업, 미화원청소, 동물사체 낙하물 수거
                <br />
                가로휴지통 청소, 가로재원용 수거
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">
                <Typography>뒷골목 청소</Typography>
                <Typography variant="body2" color="text.secondary">
                  (12m미만 도로)
                </Typography>
              </TableCell>
              <TableCell>
                종량제봉투·음식물·재활용품 수집운반
                <br />
                도로물청소, 환경미화원 청소, 동물사체낙하물 수거 등
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
        <Typography>
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
            강남구 관할:
          </Typography>{' '}
          영동대교, 동호대교 //{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
            성수대교:
          </Typography>{' '}
          성동구,{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
            한남대교:
          </Typography>{' '}
          용산구,{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
            청담대교:
          </Typography>{' '}
          서울시설공단
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
            자동차전용도로
          </Typography>{' '}
          (양재대로, 동부간선도로, 올림픽대로) : 서울시설공단
        </Typography>
      </Box>
    </Box>
  );
}

export default GenCivilComplaint;
