import {
  Box,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import '../style/ResponsiveTable.css';

const SecondTitle = styled('div')`
  text-align: center;
  border-top: 1px solid black;
  margin-bottom: 20px;
`;

const Tables = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
`;

const Wrapper = styled('div')`
  width: 100%;
  max-width: 1000px;
  padding: 0 16px;
  margin: 0 auto;
`;

const StyledImage = styled('img')`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const Recycle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper>
      <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center' }}>
        재활용 분리배출 안내
      </Typography>

      <SecondTitle className="text-section">
        <Typography gutterBottom>단독 주택 빌라 소규모 상가 배출 방법</Typography>
      </SecondTitle>

      <SecondTitle className="text-section">
        <Typography gutterBottom>투명페트병과 비닐은 매주 목요일에 배출해주세요</Typography>
      </SecondTitle>

      <Tables>
        <TableContainer component={Paper} sx={{ flex: 1, minWidth: isMobile ? '100%' : '45%' }}>
          <Table size="small" aria-label="recycle" className="mTable">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  목요일 배출
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <StyledImage src="/contents/images/recycle1.png" />
                </TableCell>
                <TableCell align="center">
                  <StyledImage src="/contents/images/recycle2.png" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ flex: 1, minWidth: isMobile ? '100%' : '45%' }}>
          <Table size="small" aria-label="recycle" className="mTable">
            <TableHead>
              <TableRow>
                <TableCell align="center">그 외 요일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <StyledImage src="/contents/images/recycle3.png" />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Tables>
    </Wrapper>
  );
};

export default Recycle;
