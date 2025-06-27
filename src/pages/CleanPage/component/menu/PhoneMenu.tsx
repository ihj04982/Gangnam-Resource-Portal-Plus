import { Box, Fade } from '@mui/material';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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
                    height: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      color: 'black',
                      mt: 2,
                    }}
                  >
                    Ellie010707
                  </Box>
                  <Box
                    sx={{
                      color: 'gray',
                      mt: 1,
                      fontSize: 12,
                    }}
                  >
                    doris0707@naver.com
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
