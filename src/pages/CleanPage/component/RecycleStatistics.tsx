import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // Divider, // 사용하지 않으므로 제거
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

// --- 데이터 타입을 위한 인터페이스 정의 ---

interface TableRowData {
  구분: string | number;
  [year: number]: string | number; // 2021, 2022, 2023, 2024 등 동적인 연도 키
  isNested?: boolean; // 생활폐기물에서 1인당, 세대당과 같이 중첩된 행을 위한 속성
}

interface NestedTableRowData {
  sub구분: string;
  [year: number]: string | number;
}

interface RowWithSubRows {
  구분: string; // 이 부분이 누락되어 있었습니다. '종량제봉투' 탭의 최상위 '구분'을 나타냅니다.
  subRows: NestedTableRowData[];
}

interface TableSection {
  id: string;
  subtitle: string;
  unit?: string;
  rows: (TableRowData | RowWithSubRows)[]; // rows 타입을 업데이트
  notes?: string[];
  isNested?: boolean;
}

interface TabContentData {
  title: string;
  sections: TableSection[];
  notes?: string[];
}

function ResourceCirculationStatistics() {
  const [value, setValue] = useState<string>('무단투기단속');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };

  // --- 데이터 정의 (각 탭별로) ---

  const illegalDumpingData: TabContentData = {
    title: '무단투기단속',
    sections: [
      {
        id: 'illegalDumpingCases',
        subtitle: '무단투기단속건수',
        unit: '(단위:건)',
        rows: [
          { 구분: '혼합배출', 2021: 3136, 2022: 2555, 2023: 4293, 2024: 4304 },
          { 구분: '담배꽁초', 2021: 21718, 2022: 16167, 2023: 6971, 2024: 9744 },
        ],
      },
      {
        id: 'illegalDumpingFinesIssued',
        subtitle: '무단투기 과태료 부과 및 징수',
        unit: '(단위:천원)',
        rows: [
          { 구분: '혼합배출', 2021: 280460, 2022: 197170, 2023: 373180, 2024: 345150 },
          { 구분: '담배꽁초', 2021: 878910, 2022: 608502, 2023: 299766, 2024: 412585 },
        ],
      },
      {
        id: 'illegalDumpingFinesCollected',
        subtitle: '징수 금액',
        unit: '(단위:천원)',
        rows: [
          { 구분: '혼합배출', 2021: 230816, 2022: 118280, 2023: 289350, 2024: 278840 },
          { 구분: '담배꽁초', 2021: 776663, 2022: 380110, 2023: 222605, 2024: 337275 },
        ],
      },
    ],
    notes: [
      '과태료 징수금액은 변동 있을 수 있음.',
      '과태료 부과 근거 : 폐기물관리법 제8조(폐기물의 투기 금지 등) 및 제15조(생활폐기물배출자의 처리 협조 등), 제68조(과태료), 강남구 폐기물관리조례 제8조(생활폐기물배출자의 처리 협조 등), 제35조(과태료의 부과 등).',
      '과태료 부과 기준 : 폐기물관리법 시행령 (과태료의 부과기준)에 따라 담배꽁초 무단투기(5만원), 혼합배출(10만원).',
      '과태료 부과금액과 징수금액이 다른 이유 : 부과는 했지만 체납되는 경우가 있으므로 징수금액이 더 적음.',
      '과태료 징수금액은 해당연도에 부과된 금액임.',
    ],
  };

  const generalWasteData: TabContentData = {
    title: '생활폐기물',
    sections: [
      {
        id: 'annualGenerationAndTreatment',
        subtitle: '생활폐기물 연도별 발생량 및 처리현황',
        unit: '(단위:톤/개)',
        rows: [
          { 구분: '매립폐기물(톤)', 2021: 13245, 2022: 16579, 2023: 14629, 2024: 10477 },
          { 구분: '소각폐기물(톤)', 2021: 72179, 2022: 68703, 2023: 69142, 2024: 66187 },
          { 구분: '매립 및 소각 폐기물 발생량 합계(톤)', 2021: 85424, 2022: 85282, 2023: 83771, 2024: 76664 },
          { 구분: '1인당 매립 및 소각 폐기물 발생량(단위:kg)', 2021: 159, 2022: 160, 2023: 152, 2024: 138 },
          { 구분: '강남구 인구수(단위:명)', 2021: '537,800명', 2022: '534,103명', 2023: '550,282명', 2024: '557,345' },
          { 구분: '세대당 매립 및 소각 폐기물 발생량(단위:kg)', 2021: 365, 2022: 366, 2023: 349, 2024: 313 },
          { 구분: '강남구 세대수(단위:세대)', 2021: 234233, 2022: 232777, 2023: 239775, 2024: 245094 },
        ],
      },
      {
        id: 'largeWasteAnnualGenerationAndTreatment',
        subtitle: '대형생활폐기물 연도별 발생량 및 처리현황',
        unit: '(단위:톤)',
        rows: [
          { 구분: '폐합성수지', 2021: 10871, 2022: 11638, 2023: 12665, 2024: 12080 },
          { 구분: '폐목재', 2021: 7718, 2022: 6244, 2023: 6675, 2024: 6864 },
          { 구분: '폐매트리스(단위:개)', 2021: 25435, 2022: 21145, 2023: 24477, 2024: 22152 },
        ],
      },
      {
        id: 'largeWastePerCapita',
        subtitle: '1인당 대형생활폐기물 발생량',
        unit: '(단위:kg)',
        isNested: true,
        rows: [
          { 구분: '폐합성수지', 2021: 20, 2022: 22, 2023: 23, 2024: 22 },
          { 구분: '폐목재', 2021: 14, 2022: 12, 2023: 12, 2024: 12 },
          { 구분: '폐매트리스(단위:개)', 2021: 0.047, 2022: 0.04, 2023: 0.044, 2024: 0.04 },
        ],
      },
      {
        id: 'largeWastePerHousehold',
        subtitle: '세대당 대형생활폐기물 발생량',
        unit: '(단위:kg)',
        isNested: true,
        rows: [
          { 구분: '폐합성수지', 2021: 46, 2022: 50, 2023: 53, 2024: 49 },
          { 구분: '폐목재', 2021: 33, 2022: 27, 2023: 28, 2024: 28 },
          { 구분: '폐매트리스(단위:개)', 2021: 0.109, 2022: 0.091, 2023: 0.102, 2024: 0.09 },
        ],
      },
    ],
    notes: [],
  };

  const foodWasteData: TabContentData = {
    title: '음식물류폐기물',
    sections: [
      {
        id: 'foodWasteCollectionBins',
        subtitle: '음식물류 폐기물 중간수집용기 설치 개수 현황',
        unit: '(단위:개)',
        rows: [{ 구분: '중간수집용기 개수', 2021: 8237, 2022: 6450, 2023: 7894, 2024: 6312 }],
        notes: [
          '※ 중간수집용기의 정의: 주민들이 음식물처리장까지 직접 배출할 수가 없기 때문에 음식물 중간수집용기에 배출하여 음식물 수집·운반하는데에 원활하도록 설치한 용기',
        ],
      },
      {
        id: 'rfidFoodWasteBins',
        subtitle: 'RFID 종량기 보급현황',
        unit: '(단위:개)',
        rows: [{ 구분: '보급대수', 2021: 256, 2022: 76, 2023: 39, 2024: 50 }],
        notes: ['※ RFID: 세대별 계량방식 음식물류 쓰레기 종량기'],
      },
      {
        id: 'foodWasteReductionBusinesses',
        subtitle: '음식물류 폐기물 다량배출사업장 현황',
        unit: '(단위:개)',
        rows: [{ 구분: '사업장 수', 2021: 1247, 2022: 1277, 2023: 1184, 2024: 1206 }],
        notes: [
          '※ 음식물류 폐기물 다량배출자의 범위: 집단급식소(100인이상), 일반음식점 및 휴게음식점(200㎡), 대규모점포(3,000㎡), 농수산물시장, 관광숙박업 그밖에 자치사, 특별자치시 또는 시·군·구의 조례로 정하는 자',
        ],
      },
    ],
    notes: [],
  };

  const recyclablesData: TabContentData = {
    title: '재활용품',
    sections: [
      {
        id: 'recyclableWasteCollection',
        subtitle: '재활용 가능자원 분리수거량',
        unit: '(단위:kg)',
        rows: [
          { 구분: '폐건전지', 2021: 39700, 2022: 36320, 2023: 41400, 2024: 48610 },
          { 구분: '종이팩', 2021: 68601, 2022: 84745, 2023: 85115, 2024: 75920 },
          { 구분: '투명페트병', 2021: 57155, 2022: 648000, 2023: 640917, 2024: 1214635 },
          { 구분: '일반페트병', 2021: 1520560, 2022: 1640600, 2023: 1577850, 2024: 1469560 },
          { 구분: '일반플라스틱', 2021: 1326680, 2022: 1426930, 2023: 1460180, 2024: 1449750 },
          { 구분: '스티로폼', 2021: 340690, 2022: 357630, 2023: 332300, 2024: 333680 },
          { 구분: '종이', 2021: 9697880, 2022: 8274070, 2023: 12128570, 2024: 12766200 },
          { 구분: '비닐', 2021: 4474830, 2022: 3539080, 2023: 3084030, 2024: 2661310 },
          { 구분: '1인당 분리수거량', 2021: 33, 2022: 30, 2023: 35, 2024: 36 },
          { 구분: '강남구 인구수', 2021: '537,800명', 2022: '534,103명', 2023: '550,282명', 2024: '557,345' },
        ],
        notes: [
          '※ 폐건전지 분리수거 중요성: 폐건전지 내 유독성 유출로 인한 환경오염 위험 예방 및 유가성 금속 재활용',
          '- 매립 시 중금속(리튬, 카드뮴 등) 유출과 부식으로 토양오염 문제 발생 및 화재 위험',
          '- 유가성 금속(철, 아연, 니켈 등)을 정선수거, 철강 재료로 재활용',
        ],
      },
    ],
    notes: [],
  };

  const standardVolumeBagsData: TabContentData = {
    title: '종량제봉투',
    sections: [
      {
        id: 'generalWasteStandardVolumeBagSales',
        subtitle: '일반폐기물류 종량제봉투 판매 및 처리현황',
        unit: '(단위:천매,천리터)',
        rows: [
          {
            구분: '가정용',
            subRows: [
              { sub구분: '판매수량', 2021: 6746, 2022: 6471, 2023: 5683, 2024: 5808 },
              { sub구분: '사용한 리터량', 2021: 91905, 2022: 88860, 2023: 77450, 2024: 78695 },
            ],
          },
          {
            구분: '영업용',
            subRows: [
              { sub구분: '판매수량', 2021: 5070, 2022: 5859, 2023: 5794, 2024: 5668 },
              { sub구분: '사용한 리터량', 2021: 376050, 2022: 387470, 2023: 383845, 2024: 377515 },
            ],
          },
          {
            구분: '재사용',
            subRows: [
              { sub구분: '판매수량', 2021: 7202, 2022: 7476, 2023: 8034, 2024: 8173 },
              { sub구분: '사용한 리터량', 2021: 131420, 2022: 134920, 2023: 143750, 2024: 145780 },
            ],
          },
          {
            구분: '불연성',
            subRows: [
              { sub구분: '판매수량', 2021: 222, 2022: 227, 2023: 241, 2024: 296 },
              { sub구분: '사용한 리터량', 2021: 10300, 2022: 10700, 2023: 11290, 2024: 5846 },
            ],
          },
        ],
      },
      {
        id: 'foodWasteStandardVolumeBagSales',
        subtitle: '음식물류폐기물 종량제봉투 판매 및 처리현황',
        unit: '(단위:천매,천리터)',
        rows: [
          {
            구분: '가정용',
            subRows: [
              { sub구분: '판매수량', 2021: 11704, 2022: 10294, 2023: 9554, 2024: 9558 },
              { sub구분: '사용한 리터량', 2021: 24856, 2022: 21943, 2023: 20187, 2024: 20279 },
            ],
          },
          {
            구분: '영업용',
            subRows: [
              { sub구분: '판매수량', 2021: 280, 2022: 626, 2023: 835, 2024: 785 },
              { sub구분: '사용한 리터량', 2021: 3545, 2022: 8675, 2023: 11905, 2024: 11120 },
            ],
          },
          {
            구분: '납부필증',
            subRows: [
              { sub구분: '판매수량', 2021: 7.4, 2022: 129, 2023: 214, 2024: 189 },
              { sub구분: '사용한 리터량', 2021: 636, 2022: 10140, 2023: 8874, 2024: 14912 },
            ],
          },
        ],
      },
    ],
    notes: [],
  };

  // 테이블 렌더링 함수
  const renderTable = (data: (TableRowData | RowWithSubRows)[]) => {
    if (!data || data.length === 0) return null;

    const years = [2021, 2022, 2023, 2024];

    return (
      <TableContainer component={Paper} sx={{ mb: 4, overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="statistics table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell align="center" sx={{ fontWeight: 'bold', minWidth: 100 }}>
                구분
              </TableCell>
              {years.map((year) => (
                <TableCell key={year} align="center" sx={{ fontWeight: 'bold' }}>
                  {year}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              // 'subRows' 속성을 가지고 있는지 확인하여 RowWithSubRows 타입인지 식별
              if ('subRows' in row) {
                const typedRow = row as RowWithSubRows; // 타입 단언
                return (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        rowSpan={typedRow.subRows.length + 1}
                        sx={{
                          verticalAlign: 'top',
                          fontWeight: 'bold',
                          borderBottom: 'none',
                        }}
                      >
                        {typedRow.구분}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{typedRow.subRows[0].sub구분}</TableCell>
                      {years.map((year) => (
                        <TableCell key={year} align="center" sx={{ py: 1.5 }}>
                          {typedRow.subRows[0][year]}
                        </TableCell>
                      ))}
                    </TableRow>
                    {typedRow.subRows.slice(1).map((subRow, subIndex) => (
                      <TableRow key={`${index}-${subIndex}`}>
                        <TableCell sx={{ fontWeight: 'bold' }}>{subRow.sub구분}</TableCell>
                        {years.map((year) => (
                          <TableCell key={year} align="center" sx={{ py: 1.5 }}>
                            {subRow[year]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </React.Fragment>
                );
              } else {
                // 일반적인 TableRowData 타입의 행
                const typedRow = row as TableRowData; // 타입 단언
                return (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ py: 1.5, verticalAlign: typedRow.isNested ? 'top' : 'middle' }}
                    >
                      {typeof typedRow.구분 === 'string' && typedRow.isNested ? (
                        <Box sx={{ mt: 0 }}>
                          {typedRow.구분.split('\n').map((line, i) => (
                            <Typography key={i} variant="body2">
                              {line}
                            </Typography>
                          ))}
                        </Box>
                      ) : (
                        typedRow.구분
                      )}
                    </TableCell>
                    {years.map((year) => (
                      <TableCell key={year} align="center" sx={{ py: 1.5 }}>
                        {typedRow[year]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderTabContent = (data: TabContentData) => (
    <Box>
      {data.sections.map((section, index) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" key={index} gutterBottom sx={{ fontWeight: 'bold' }}>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#4CAF50', // Green bullet point
                mr: 1,
                verticalAlign: 'middle',
              }}
            />
            {section.subtitle}
            {section.unit && (
              <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {section.unit}
              </Typography>
            )}
          </Typography>
          {renderTable(section.rows)}
          {section.notes && (
            <Box sx={{ mt: -2, ml: 2, fontSize: '0.85rem', color: 'text.secondary' }}>
              {section.notes.map((note, noteIndex) => (
                <Typography key={noteIndex} variant="body2" sx={{ mb: 0.5 }}>
                  {note}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ))}
      {data.notes && (
        <Box sx={{ mt: 2, ml: 2, fontSize: '0.85rem', color: 'text.secondary' }}>
          {data.notes.map((note, noteIndex) => (
            <Typography key={noteIndex} variant="body2" sx={{ mb: 0.5 }}>
              {note}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <Box sx={{ p: 3, width: '100%' }}>
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
        자원순환 통계
      </Typography>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <TabList
            onChange={handleChange}
            aria-label="resource circulation statistics tabs"
            TabIndicatorProps={{ sx: { backgroundColor: '#4CAF50' } }}
            sx={{
              '& .MuiTab-root': {
                fontWeight: 'bold',
                color: 'text.primary',
                '&.Mui-selected': {
                  color: '#4CAF50',
                },
              },
            }}
          >
            <Tab label="무단투기단속" value="무단투기단속" />
            <Tab label="생활폐기물" value="생활폐기물" />
            <Tab label="음식물류폐기물" value="음식물류폐기물" />
            <Tab label="재활용품" value="재활용품" />
            <Tab label="종량제봉투" value="종량제봉투" />
          </TabList>
        </Box>
        <TabPanel value="무단투기단속" sx={{ p: 0 }}>
          {renderTabContent(illegalDumpingData)}
        </TabPanel>
        <TabPanel value="생활폐기물" sx={{ p: 0 }}>
          {renderTabContent(generalWasteData)}
        </TabPanel>
        <TabPanel value="음식물류폐기물" sx={{ p: 0 }}>
          {renderTabContent(foodWasteData)}
        </TabPanel>
        <TabPanel value="재활용품" sx={{ p: 0 }}>
          {renderTabContent(recyclablesData)}
        </TabPanel>
        <TabPanel value="종량제봉투" sx={{ p: 0 }}>
          {renderTabContent(standardVolumeBagsData)}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default ResourceCirculationStatistics;
