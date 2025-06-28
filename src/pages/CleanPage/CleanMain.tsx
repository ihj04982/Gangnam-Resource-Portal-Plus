import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import './style/ResponsiveTable.css';
import { Card, CardContent, Grid, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

const garbageFlow = [
  { title: '일반쓰레기 배출', desc: '가정 · 영업장' },
  { title: '쓰레기 회수', desc: '수거업체 수거' },
  { title: '처리', desc: '강남 자원처리시설(소각)\n인천 수도권매립지(매립)' },
];
const schedule = [
  { type: '종량제', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '×', sun: '○' },
  { type: '음식물', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '×', sun: '○' },
  { type: '일반재활용', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '×', sun: '○' },
  { type: '투명페트병/비닐류', mon: '', tue: '', wed: '', thu: '●', fri: '', sat: '×', sun: '' },
];

const trashDisposal = [
  {
    type: '일반쓰레기(종량제)',
    how: '일반종량제 봉투에 담아서 배출',
    ex: '휴지 기저귀등 물기없는 잡쓰레기',
    photo: '/contents/images/trash1.png',
  },
  {
    type: '타지않는 쓰레기',
    how: '태워서는 안되는 쓰레기용 봉투에 담아서 배출',
    ex: '유리조각, 도자기 , 고양이 모래 등',
    photo: '/contents/images/trash2.png',
  },
  {
    type: '음식물류폐기물',
    how: '물기 제거 후 음식물쓰레기 전용 종량제 봉투에 담아 음식물쓰레기 수집용기에 배출',
    ex: '과일(귤)껍질, 수박껍질, 김치, 곡류 등',
    photo: '/contents/images/trash3.png',
  },
  {
    type: '음식물쓰레기가 아닌 일반쓰레기들',
    how: '일반종량제 봉투에 담아서 배출',
    ex: '동물뼈(닭뼈,족발등), 단단한껍질(호두,파인애플), 어패류껍데기(조개,소라,전복,꼬막,게,굴 등), 티백, 한약찌꺼기',
    photo: '/contents/images/trash4.png',
  },
  {
    type: '재활용품',
    how: '종류별로 분리하여 배출',
    ex: '종이류, 캔류, 유리병류, 플라스틱류, 스티로폼, 비닐류',
    photo: '/contents/images/trash5.png',
  },
  {
    type: '대형폐기물',
    how: '해당업체에 전화 또는 강남구청 홈페이지에서 인터넷 신청',
    ex: '이불, 장롱, 책상, 침대, 냉장고 등',
    photo: '/contents/images/trash6.png',
  },
  {
    type: '폐의약품',
    how: '폐의약품 전용수거함 또는 우체통에 밀봉하여 배출',
    ex: '가루약, 알약, 물약 연고 등 특수용기',
    photo: '/contents/images/trash7.png',
  },
  {
    type: '사업장폐기물',
    how: '폐기물처리업체와 계약하여 자체 처리',
    ex: '배출시설계와 비배출시설계 사업장에서 발생하는 폐기물(임목폐목재, 폐합성수지류 등)',
    photo: '/contents/images/trash8.png',
  },
];

const CleanMain = () => {
  return (
    <>
      {' '}
      <div style={{ maxWidth: 700, margin: '2rem auto' }}>
        <Typography variant="h6" gutterBottom>
          배출 안내
        </Typography>

        <Typography variant="body1" color="textSecondary" gutterBottom>
          배출 시간은 <strong style={{ color: '#007200' }}>20:00~익일 05:00</strong>에 배출해주세요.
        </Typography>

        <TableContainer component={Paper}>
          <Table size="small" aria-label="garbage schedule">
            <TableHead>
              <TableRow>
                <TableCell>종류</TableCell>
                <TableCell align="center">월</TableCell>
                <TableCell align="center">화</TableCell>
                <TableCell align="center">수</TableCell>
                <TableCell align="center">목</TableCell>
                <TableCell align="center">금</TableCell>
                <TableCell align="center">토</TableCell>
                <TableCell align="center">일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: row.type.includes('투명') ? 'bold' : 'normal',
                      color: row.type.includes('투명') ? '#007200' : 'inherit',
                    }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell align="center">{row.mon}</TableCell>
                  <TableCell align="center">{row.tue}</TableCell>
                  <TableCell align="center">{row.wed}</TableCell>
                  <TableCell align="center">{row.thu}</TableCell>
                  <TableCell align="center">{row.fri}</TableCell>
                  <TableCell align="center">{row.sat}</TableCell>
                  <TableCell align="center">{row.sun}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          배출 장소는 <strong style={{ color: '#007200' }}>내점포, 내 사업장 앞</strong>에 배출해주세요.
          <br />※ 연면적 1,000㎡ 이상 건물인 경우 → 사업 업체와 계약을 통한 배출
        </Typography>
      </div>
      <div style={{ maxWidth: 700, margin: '2rem auto' }}>
        <Typography variant="h6" gutterBottom>
          생활쓰레기 배출방법
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="garbage" className="mTable">
            <TableHead>
              <TableRow>
                <TableCell>종류</TableCell>
                <TableCell>배출방법</TableCell>
                <TableCell>예시</TableCell>
                <TableCell>사진</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trashDisposal.map((row, idx) => (
                <TableRow key={idx} sx={{ backgroundColor: '#fff' }}>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.how}</TableCell>
                  <TableCell align="center">{row.ex}</TableCell>
                  <TableCell align="center">
                    <img src={row.photo} alt={row.type} style={{ maxWidth: '300px', height: 'auto' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box sx={{ px: 2, py: 3 }}>
        <Typography variant="h6" gutterBottom>
          생활쓰레기 배출방법
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          일반쓰레기 처리 절차
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center" flexWrap="wrap">
          {garbageFlow.map((step, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={12} sm={3}>
                <Card sx={{ backgroundColor: '#f5f5f5' }}>
                  <CardContent>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {idx < garbageFlow.length - 1 && (
                <Grid item xs="auto">
                  <ArrowForwardIcon fontSize="large" />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CleanMain;
