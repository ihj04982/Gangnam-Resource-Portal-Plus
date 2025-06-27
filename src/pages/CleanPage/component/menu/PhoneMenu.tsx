import { Box, Fade } from '@mui/material';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function PhoneMenu() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Box sx={{ boxShadow: 1, textOverflow: 'ellipsis', backgroundColor: '#FBFBFB' }}>
        <Sidebar backgroundColor="#FBFBFB">
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
            ></MenuItem>

            {!collapsed && (
              <Fade in={!collapsed} timeout={1200}>
                <Box
                  sx={{
                    // height: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    생활쓰레기 처리절차
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    재활용 분리배출{' '}
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    투명페트병 분리배출
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    보호수
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    지정 약수터
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    환경지도 점검 내역
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    강남 행사 공지
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    플로깅
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    사업장 폐기물 신고
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    자원순환 통계
                  </Box>
                  <Box
                    sx={{
                      color: 'black',
                      mt: 1,
                    }}
                  >
                    일반민원
                  </Box>
                </Box>
              </Fade>
            )}
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
}
