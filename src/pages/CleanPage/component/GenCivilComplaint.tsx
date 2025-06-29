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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import '../style/ResponsiveTable.css';

function GenCivilComplaint() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* 제목 */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            backgroundColor: '#4CAF50',
            mr: 1,
          }}
        />
        청소대행 범위
      </Typography>

      {/* 테이블 (반응형 박스) */}
      <Box sx={{ width: '100%', overflowX: 'auto', mb: 3 }}>
        <TableContainer component={Paper} sx={{ minWidth: isMobile ? '100%' : 650 }}>
          <Table size="small" aria-label="청소대행범위 테이블" className="mTable">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  연번
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  구분
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  과업내용
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  1
                </TableCell>
                <TableCell align="center" sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  <Typography>가로 청소</Typography>
                  <Typography variant="caption" color="text.secondary">
                    (12m 이상 도로)
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  먼지흡입·노면청소 작업, 미화원청소, 동물사체 낙하물 수거
                  <br />
                  가로휴지통 청소, 가로재원용 수거
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  2
                </TableCell>
                <TableCell align="center" sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  <Typography>뒷골목 청소</Typography>
                  <Typography variant="caption" color="text.secondary">
                    (12m 미만 도로)
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '0.9rem' }}>
                  종량제봉투·음식물·재활용품 수집운반
                  <br />
                  도로물청소, 환경미화원 청소, 동물사체 낙하물 수거 등
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* 하단 설명 */}
      <Box sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
        {[
          ['강남구 관할:', '영동대교, 동호대교'],
          ['성수대교:', '성동구'],
          ['한남대교:', '용산구'],
          ['청담대교:', '서울시설공단'],
          ['자동차전용도로', '(양재대로, 동부간선도로, 올림픽대로) : 서울시설공단'],
        ].map(([title, content], i) => (
          <Typography key={i} sx={{ mb: 1 }}>
            <Typography component="span" sx={{ fontWeight: 'bold', color: '#424242' }}>
              {title}
            </Typography>{' '}
            {content}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default GenCivilComplaint;
