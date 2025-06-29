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
  List,
  ListItem,
} from '@mui/material';

const CoffeeGround = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* 제목 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        커피찌꺼기 재자원화 사업
      </Typography>

      {/* 목적 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        • 목적
      </Typography>
      <Typography variant="body2" paragraph>
        기존 커피전문점에서 일반쓰레기로 배출되는 커피찌꺼기를 별도 수거후 재자원화 하는 사업을 추진하여 매립, 소각에
        따른 처리비용 및 탄소배출량을 감소시키고, 26년 수도권 생활폐기물 직매립 금지 등 폐기물 환경변화에 대응하고자 함
      </Typography>

      {/* 시행일 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        • 시행일
      </Typography>
      <Typography variant="body2" paragraph>
        2023. 03. ~ 현재까지
      </Typography>

      {/* 현황 표 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        • 현황
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, mb: 3 }}>
        <Table size="small" className="mTable">
          <TableHead sx={{ backgroundColor: '#eee' }}>
            <TableRow>
              <TableCell>연도</TableCell>
              <TableCell>배출량</TableCell>
              <TableCell>참여업소수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2023</TableCell>
              <TableCell>272톤</TableCell>
              <TableCell>439개</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024.11월</TableCell>
              <TableCell>493톤</TableCell>
              <TableCell>89개</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* 배출안내 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        • 배출안내
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 3 }}>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            <strong>배출요일</strong> : 매주 화요일, 금요일 오전 (주2회 요일제)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            <strong>배출품목</strong> : 일반 투명 수거용 비닐봉투 (20L 이하)
            <br />→ 찌꺼기물 잔량을 제거해주세요. 이물질이 섞여있을 시 수거가 거부됩니다.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            * 지정된 배출요일 및 품목 외 배출 시 수거가 불가합니다. (분리배출 표시 없이 무단투기로 배출 시 과태료 부과될
            수 있음)
          </Typography>
        </ListItem>
      </List>

      {/* 수거업체 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>
        • 수거업체
      </Typography>
      <Typography variant="body2">강남구 청소대행업체</Typography>
    </Box>
  );
};

export default CoffeeGround;
