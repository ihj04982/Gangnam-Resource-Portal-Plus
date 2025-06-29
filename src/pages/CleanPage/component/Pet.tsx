import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
const Pet = () => {
  return (
    <>
      <Box sx={{ padding: 4 }}>
        {/* 제목 */}
        <Typography variant="h6" gutterBottom>
          「재활용품 무인회수기」 운영
        </Typography>

        {/* 목적 */}
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          • 목적
        </Typography>
        <Typography variant="body2" paragraph>
          인센티브 제공을 통한 고품질 자원의 재활용 자원 회수율을 높이고, 주민들이 보다 쉽고 간편하게 재활용품을
          분리배출토록 하여 자발적 주민 재활용 실천문화 확산에 기여
        </Typography>

        {/* 운영현황 */}
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          • 운영현황
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small" className="mTable">
            <TableHead sx={{ backgroundColor: '#ddd' }}>
              <TableRow>
                <TableCell>구분</TableCell>
                <TableCell>설치장소(주소)</TableCell>
                <TableCell>품목</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* 일반 */}
              <TableRow>
                <TableCell rowSpan={5}>일반</TableCell>
                <TableCell>삼성2동주민센터 (봉은사로 419)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>청담동주민센터 자전거보관대 (압구정로79길 26)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>개포4동주민센터 (개포로22길 33)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>도곡1동주민센터 (도곡로18길 57)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>자곡문화센터 (자곡로 100)</TableCell>
                <TableCell>종이팩</TableCell>
              </TableRow>

              {/* 시범운영 */}
              <TableRow>
                <TableCell rowSpan={2}>시범운영</TableCell>
                <TableCell>논현2동주민센터 (학동로43길 17)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>대청공원 (개포로116길 21)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>

              {/* 홍보용 */}
              <TableRow>
                <TableCell>
                  홍보용
                  <br />
                  (투명페트병 파쇄기)
                </TableCell>
                <TableCell>역삼1동주민센터 (역삼로7길 16)</TableCell>
                <TableCell>투명페트병</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* 이용방법 */}
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            • 이용방법
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>일반</strong>: ‘오늘의 분리수거’ 앱 설치 → QR코드 인증 → 투명페트병 및 종이팩 배출 → 포인트 자동
            적립 (1개당 10포인트)
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>시범운영</strong>: ‘수거빈’ 앱 또는 온라인 홈페이지 회원가입 → 투명페트병 배출 → 포인트 자동 적립
            (1개당 10포인트)
          </Typography>
        </Box>
      </Box>
      ;
    </>
  );
};

export default Pet;
