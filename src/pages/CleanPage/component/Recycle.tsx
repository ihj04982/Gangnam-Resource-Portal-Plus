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
} from '@mui/material';
import '../style/ResponsiveTable.css';

const SecondTitle = styled('div')`
  text-align: center; /* 텍스트 중앙 정렬 */
  border-top: 1px solid black; /* 밑줄 추가 */
  margin-bottom: 20px;
`;

const Tables = styled('div')`
  display: flex;
  margin-top: 50px;
  item-align: center; /* 텍스트 중앙 정렬 */
`;
const Wrapper = styled('div')`
  // 반응형
  width: 1000px;
  margin: 0 auto; /* 가운데 정렬 */
`;
const Recycle = () => {
  return (
    <Wrapper>
      <div>
        {' '}
        <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' }}>
          재활용 분리배출 안내
        </Typography>
        <SecondTitle className="text-section">
          <Typography gutterBottom>단독 주택 빌라 소규모 상가 배출 방법</Typography>
        </SecondTitle>
        <SecondTitle className="text-section">
          <Typography gutterBottom>투명페트병과 비닐은 매주 목요일에 배출해주세요</Typography>
        </SecondTitle>
      </div>
      <Tables>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="recycle" className="mTable">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>목요일 배출</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: '#fff' }}>
                <TableCell>
                  <img src="/contents/images/recycle1.png"></img>
                </TableCell>
                <TableCell>
                  <img src="/contents/images/recycle2.png"></img>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table size="small" aria-label="recycle" className="mTable">
            <TableHead>
              <TableRow>
                <TableCell>그 외 요일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%" // 필요에 따라 추가
                  >
                    <img src="/contents/images/recycle3.png" style={{ maxWidth: '100%', height: 'auto' }} />
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
