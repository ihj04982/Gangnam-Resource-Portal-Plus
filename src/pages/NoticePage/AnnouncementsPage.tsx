import { Container, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// const mock = [
//   {
//     index: 37,
//     date: '2025.01.07',
//     title: '재활용품 배출 요일과 배출 시간이 어떻게 되나요?',
//     content: [
//       '단독주택, 빌라, 소규모 상가의 경우 투명페트병과 비닐은 매주 목요일(백색 그물망 또는 (반)투명 비닐봉지에 배출)이고, 그 외 품목은 월‧화‧수‧금‧일요일(녹색 그물망 배출)입니다. 배출 시간은 20시~익일 5시까지입니다. 공동주택과 연면적 1,000제곱미터 이상 대형건물은 민간 재활용업체와 계약하여 자체 처리해야 합니다.',
//     ],
//   },
//   {
//     index: 36,
//     date: '2025.01.07',
//     title: '대형폐기물 인터넷 신고 후, 접수증(=신고필증) 출력이 안 되는 경우 어떻게 배출하나요?',
//     content: [
//       '접수번호 및 수거일을 메모지에 적어 신고된 대형폐기물 위에 부착 후 수거일 전날 건물 앞에 배출하여 주시기 바랍니다.',
//     ],
//   },
// ];

const AnnouncementsPage = () => {
  const SearchBox = () => {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: '0 auto 2rem' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="제목 및 내용을 입력해주세요."
          inputProps={{ 'aria-label': '제목 및 내용을 입력해주세요.' }}
        />
        <IconButton type="button" sx={{ p: '1rem' }} aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </Paper>
    );
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h6" textAlign="center">
        공지사항
      </Typography>
      <SearchBox />
    </Container>
  );
};

export default AnnouncementsPage;
