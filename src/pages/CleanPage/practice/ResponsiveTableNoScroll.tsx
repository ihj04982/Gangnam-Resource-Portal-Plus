import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface TableRowData {
  구분: string;
  2021: string | number;
  2022: string | number;
  2023: string | number;
  2024: string | number;
}

const sampleData: TableRowData[] = [
  {
    구분: '혼합배출 (일반 쓰레기 포함, 음식물과 재활용 제외한 모든 가정용 및 상업용 폐기물)',
    2021: '3,136 건 (단속 건수)',
    2022: '2,555 건 (단속 건수)',
    2023: '4,293 건 (단속 건수)',
    2024: '4,304 건 (단속 건수, 예상)',
  },
  {
    구분: '담배꽁초 무단투기 (도로 및 공공장소에 무단투기 된 담배꽁초 및 흡연관련 폐기물)',
    2021: '21,718 건 (단속 건수)',
    2022: '16,167 건 (단속 건수)',
    2023: '6,971 건 (단속 건수)',
    2024: '9,744 건 (단속 건수, 예상)',
  },
  {
    구분: '소각폐기물(톤) - 주로 음식물 쓰레기 및 재활용 불가 폐기물 포함, 정확한 처리가 필요한 항목',
    2021: 72179,
    2022: 68703,
    2023: 69142,
    2024: 66187,
  },
  {
    구분: '매립폐기물(톤) - 주로 매립지로 보내지는 폐기물, 환경영향 최소화를 위해 집중 관리',
    2021: 13245,
    2022: 16579,
    2023: 14629,
    2024: 10477,
  },
  {
    구분: '1인당 매립 및 소각 폐기물 발생량(단위:kg) - 주민 1인 기준 발생 폐기물량, 환경 인식 변화 반영',
    2021: 159,
    2022: 160,
    2023: 152,
    2024: 138,
  },
  {
    구분: '강남구 인구수(단위:명) - 총 인구수 변동 및 도시화 영향 분석 참고용',
    2021: '537,800명',
    2022: '534,103명',
    2023: '550,282명',
    2024: '557,345명',
  },
  {
    구분: '세대당 매립 및 소각 폐기물 발생량(단위:kg) - 가구별 평균 폐기물 발생량, 재활용 정책 수립 자료',
    2021: 365,
    2022: 366,
    2023: 349,
    2024: 313,
  },
  {
    구분: '강남구 세대수(단위:세대) - 각 연도별 등록 세대 수 및 추세 분석',
    2021: 234233,
    2022: 232777,
    2023: 239775,
    2024: 245094,
  },
];

function ResponsiveTableNoScroll() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'hidden' }}>
      <Table
        sx={{
          width: '100%',
          tableLayout: 'fixed', // 너비 고정 분배
          '& th, & td': {
            padding: isMobile ? '6px 8px' : '12px 16px',
            fontSize: isMobile ? '0.75rem' : '1rem',
            whiteSpace: 'normal', // 줄바꿈 허용
            wordBreak: 'break-word',
            textAlign: 'center',
          },
        }}
        aria-label="responsive table without scroll"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell sx={{ fontWeight: 'bold', width: '40%', textAlign: 'center' }}>구분</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>2021</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>2022</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>2023</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>2024</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row, idx) => (
            <TableRow key={idx} hover>
              <TableCell sx={{ textAlign: 'left', fontWeight: 'bold' }}>{row.구분}</TableCell>
              <TableCell>{row[2021]}</TableCell>
              <TableCell>{row[2022]}</TableCell>
              <TableCell>{row[2023]}</TableCell>
              <TableCell>{row[2024]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResponsiveTableNoScroll;
