import { Outlet, useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import gangnamLogo from '../images/gangnam-gu-logo-crop.png';
import gangnamLogoMain from '../images/gangnam-gu-logo-main.png';
import largeWasteBanner from '../images/large-waste-banner.png';

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
  minHeight: '100vh',
});

const Header = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: '0 16px',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  color: '#000000',
}));

const NavMenu = styled('div')(() => ({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  fontWeight: 500,
  fontSize: 16,
}));

const RightMenu = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));

const Banner = styled('div')({
  width: '100%',
  height: '240px',
  backgroundImage: `url(${largeWasteBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const getBannerTitle = () => {
  switch (location.pathname) {
    case '/largewaste':
      return '대형생활폐기물 안내';
    case '/largewaste/free':
      return '무상수거 안내';
    case '/notice/announcements':
      return '공지사항';
    case '/notice/faq':
      return 'FAQ';
    case '/clean':
      return '생활쓰레기 처리절차';
    case '/clean/recycle':
      return '재활용 분리배출';
    case '/clean/pet':
      return '투명페트병 분리배출';
    case '/clean/sewage':
      return '정화조청소';
    case '/clean/coffee-ground':
      return '커피박 수거';
    case '/clean/gn-recycle-center':
      return '재활용정거장 지원 사업';
    case '/clean/biz-trash':
      return '사업장 폐기물 신고';
    case '/clean/gn-civil':
      return '청소대행업체 현황';
    case '/clean/trash':
      return '강남 환경자원센터';
    case '/clean/gn-env-re-center':
      return '강남 자원회수시설';
    case '/clean/recycle-statistics':
      return '자원순환통계';
    case '/clean/gn-request':
      return '일반민원';
    default:
      return '';
  }
};

const getBreadcrumb = () => {
  switch (location.pathname) {
    case '/largewaste':
      return '대형생활폐기물 > 대형생활폐기물 안내';
    case '/largewaste/free':
      return '대형생활폐기물 > 무상수거 안내';
    case '/notice/announcements':
      return '게시판 > 공지사항';
    case '/notice/faq':
      return '게시판 > FAQ';
    case '/clean':
      return '청소정보 > 생활쓰레기 처리절차';
    case '/clean/recycle':
      return '청소정보 > 재활용 분리배출';
    case '/clean/pet':
      return '청소정보 > 투명페트병 분리배출';
    case '/clean/sewage':
      return '청소정보 > 정화조청소';
    case '/clean/coffee-ground':
      return '청소정보 > 커피박 수거';
    case '/clean/gn-recycle-center':
      return '청소정보 > 재활용정거장 지원 사업';
    case '/clean/biz-trash':
      return '청소정보 > 사업장 폐기물 신고';
    case '/clean/gn-civil':
      return '청소정보 > 청소대행업체 현황';
    case '/clean/trash':
      return '청소정보 > 강남 환경자원센터';
    case '/clean/gn-env-re-center':
      return '청소정보 > 강남 자원회수시설';
    case '/clean/recycle-statistics':
      return '청소정보 > 자원순환통계';
    case '/clean/gn-request':
      return '청소정보 > 일반민원';
    default:
      return '';
  }
};

const Content = styled('div')({
  flex: 1,
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  overflow: 'auto',
  flexGrow: 1,
});

const Sidebar = styled('aside')({
  width: '240px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
});

const SidebarTitle = styled('div')({
  backgroundColor: '#137a1f', // 진한 초록색
  color: '#fff',
  padding: '16px',
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
});

const SidebarMenu = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid #ddd',
});

const MenuItem = styled('div')({
  padding: '16px',
  borderBottom: '1px solid #eee',
  cursor: 'pointer',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  '&.active': {
    backgroundColor: '#e3f2db',
    fontWeight: 'bold',
  },
});

const MainContent = styled('div')({
  flex: 1,
  padding: '24px',
});

const Footer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px',
  padding: '0 16px',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#2c2c2c', // 약간 밝은 회색
  color: 'white',
}));

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLocationPage = location.pathname === '/locations';
  return (
    <Layout>
      <Header>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={gangnamLogoMain} alt="강남구 로고" style={{ height: 60 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            자원순환 종합포털
          </Typography>
        </Box>
        <NavMenu>
          <Typography sx={{ fontWeight: 'bold', px: 1, cursor: 'pointer' }} onClick={() => navigate('/locations')}>
            위치정보
          </Typography>
          <Typography sx={{ fontWeight: 'bold', px: 1, cursor: 'pointer' }} onClick={() => navigate('/largewaste')}>
            대형생활폐기물
          </Typography>
          <Typography sx={{ fontWeight: 'bold', px: 1, cursor: 'pointer' }} onClick={() => navigate('/clean')}>
            청소정보
          </Typography>
          <Typography sx={{ fontWeight: 'bold', px: 1, cursor: 'pointer' }} onClick={() => navigate('/notice')}>
            FAQ·공지사항
          </Typography>
        </NavMenu>
        <RightMenu>
          <IconButton
            sx={{
              color: '#4caf50', // 아이콘 색상 초록
              borderRadius: 0, // hover 시 사각형
              '&:hover': {
                backgroundColor: 'rgb(76, 175, 80, 0.1)', // 연한 초록 배경 on hover
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </RightMenu>
      </Header>
      {!isLocationPage && (
        <Banner>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {getBannerTitle()}
            </Typography>
            <Typography variant="body2">
              <HomeIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
              {getBreadcrumb()}
            </Typography>
          </Box>
        </Banner>
      )}

      <Content>
        {!isLocationPage && (
          <Sidebar>
            {location.pathname.startsWith('/largewaste') && (
              <>
                <SidebarTitle>대형생활폐기물</SidebarTitle>
                <SidebarMenu>
                  <MenuItem
                    className={location.pathname === '/largewaste' ? 'active' : ''}
                    onClick={() => navigate('/largewaste')}
                  >
                    대형생활폐기물 안내
                  </MenuItem>
                  <MenuItem
                    className={location.pathname === '/largewaste/free' ? 'active' : ''}
                    onClick={() => navigate('/largewaste/free')}
                  >
                    무상수거 안내
                  </MenuItem>
                  <MenuItem>배출 신청</MenuItem>
                  <MenuItem>배출 신청내역 확인</MenuItem>
                </SidebarMenu>
              </>
            )}

            {location.pathname.startsWith('/notice') && (
              <>
                <SidebarTitle>게시판</SidebarTitle>
                <SidebarMenu>
                  <MenuItem
                    className={location.pathname.startsWith('/notice/announcements') ? 'active' : ''}
                    onClick={() => navigate('/notice/announcements')}
                  >
                    공지사항
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/notice/faq') ? 'active' : ''}
                    onClick={() => navigate('/notice/faq')}
                  >
                    FAQ
                  </MenuItem>
                </SidebarMenu>
              </>
            )}
            {location.pathname.startsWith('/clean') && (
              <>
                <SidebarTitle>청소 정보</SidebarTitle>
                <SidebarMenu>
                  <MenuItem
                    className={location.pathname.startsWith('/clean') ? 'active' : ''}
                    onClick={() => navigate('/clean')}
                  >
                    생활쓰레기 처리절차
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/recycle') ? 'active' : ''}
                    onClick={() => navigate('/clean/recycle')}
                  >
                    재활용 분리배출
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/pet') ? 'active' : ''}
                    onClick={() => navigate('/clean/pet')}
                  >
                    투명페트병 분리배출
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/sewage') ? 'active' : ''}
                    onClick={() => navigate('/clean/sewage')}
                  >
                    정화조청소
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/coffee-ground') ? 'active' : ''}
                    onClick={() => navigate('/clean/coffee-ground')}
                  >
                    커피박 수거
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/gn-recycle-center') ? 'active' : ''}
                    onClick={() => navigate('/clean/gn-recycle-center')}
                  >
                    재활용정거장 지원 사업
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/biz-trash') ? 'active' : ''}
                    onClick={() => navigate('/clean/biz-trash')}
                  >
                    사업장 폐기물 신고
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/gn-civil') ? 'active' : ''}
                    onClick={() => navigate('/clean/gn-civil')}
                  >
                    청소대행업체 현황
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/trash') ? 'active' : ''}
                    onClick={() => navigate('/clean/trash')}
                  >
                    강남 환경자원센터
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/gn-env-re-center') ? 'active' : ''}
                    onClick={() => navigate('/clean/gn-env-re-center')}
                  >
                    강남 자원회수시설
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/recycle-statistics') ? 'active' : ''}
                    onClick={() => navigate('/clean/recycle-statistics')}
                  >
                    자원순환통계
                  </MenuItem>
                  <MenuItem
                    className={location.pathname.startsWith('/clean/gn-request') ? 'active' : ''}
                    onClick={() => navigate('/clean/gn-request')}
                  >
                    일반민원
                  </MenuItem>
                </SidebarMenu>
              </>
            )}
          </Sidebar>
        )}

        <MainContent style={isLocationPage ? { padding: 0 } : {}}>
          <Outlet />
        </MainContent>
      </Content>

      <Footer>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // 좌우 정렬
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {/* 왼쪽 로고 + 주소 */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={gangnamLogo} alt="강남구 로고" style={{ height: '60px', marginRight: 12 }} />
            <Box
              component="p"
              sx={{
                fontSize: 12,
                color: 'white',
                lineHeight: 1.4,
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              (06090)서울특별시 강남구 학동로 426 (삼성동)
              {'\n'}02-3423-6000~3 (당직실 / 야간·공휴일) FAX. 02-3423-8840,8876
              {'\n'}COPYRIGHT 2023. GANGNAM-GU OFFICE, ALL RIGHTS RESERVED.
            </Box>
          </Box>

          {/* 오른쪽 강남구청 홈페이지 */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <HomeIcon fontSize="small" />
            <Typography variant="caption">강남구청 홈페이지</Typography>
          </Box>
        </Box>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
