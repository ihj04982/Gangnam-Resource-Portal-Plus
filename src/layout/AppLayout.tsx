import React from 'react';
import {
  Box,
  AppBar,
  Typography,
  styled,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

// 스타일
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

// 스타일 정의
const HeaderWrapper = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: 'none',
  padding: '12px 24px',
  position: 'static',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const NavTableCell = styled(TableCell)(({ theme }) => ({
  cursor: 'pointer',
  padding: '8px 16px',
  borderBottom: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

const NavigationMenu = () => (
  <Table>
    <TableBody>
      <TableRow>
        <NavTableCell>위치정보</NavTableCell>
        <NavTableCell>대형생활폐기물</NavTableCell>
        <NavTableCell>청소정보</NavTableCell>
        <NavTableCell>FAQ·공지사항</NavTableCell>
        <NavTableCell>강남구청 홈페이지</NavTableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const Banner = styled('div')({
  width: '100%',
  height: '240px',
  background: `url('/banner.jpg') no-repeat center center`,
  backgroundSize: 'cover',
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flex: 1,
  backgroundColor: '#fff',
  padding: '24px',
  gap: '24px',
});

const Sidebar = styled(Box)({
  width: '240px',
  borderRight: '1px solid #ddd',
  backgroundColor: '#fafafa',
});

const MainContent = styled(Box)({
  flex: 1,
});

// 컴포넌트
const AppLayout: React.FC = () => {
  return (
    <Root>
      {/* 상단 네비게이션 */}
      <HeaderWrapper>
        <Typography variant="h6" fontWeight="bold" color="black">
          강남구 자원순환 종합포털
        </Typography>
        <Box>
          <NavigationMenu />
        </Box>
      </HeaderWrapper>

      {/* 배너 이미지 */}
      <Banner />

      {/* Breadcrumb */}
      <Box sx={{ backgroundColor: '#f5f5f5', p: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            홈
          </Link>
          <Link underline="hover" color="inherit" href="/largewaste">
            대형생활폐기물
          </Link>
          <Typography color="text.primary">대형생활폐기물 안내</Typography>
        </Breadcrumbs>
      </Box>

      {/* 본문 */}
      <ContentWrapper>
        {/* 좌측 메뉴 */}
        <Sidebar>
          <Typography variant="h6" sx={{ p: 2, backgroundColor: '#2e7d32', color: '#fff' }}>
            대형생활폐기물
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography sx={{ my: 1, fontWeight: 'bold', color: '#005bac' }}>대형생활폐기물 안내</Typography>
            <Typography sx={{ my: 1 }}>무상수거 안내</Typography>
          </Box>
        </Sidebar>

        {/* 우측 컨텐츠 */}
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </Root>
  );
};

export default AppLayout;
