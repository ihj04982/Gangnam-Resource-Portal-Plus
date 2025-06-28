// src/components/BusinessWasteDeclaration.tsx
import { Box, Typography, Paper } from '@mui/material';

function BizTrash() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            backgroundColor: '#4CAF50', // Green color
            mr: 1,
          }}
        />
        사업장폐기물 신고
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
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
          사업장폐기물의 정의
        </Typography>
        <Typography variant="body1" sx={{ ml: 2, lineHeight: 1.6 }}>
          「대기환경보전법」,「물환경보전법」 또는 「소음·진동관리법」에 따라 배출시설을 설치·운영하는 사업장이나 그
          밖에 대통령령으로 정하는 사업장에서 발생하는 폐기물
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
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
          사업장폐기물의 분류
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3,
            maxWidth: '100%',
            overflowX: 'auto',
          }}
        >
          <Paper
            elevation={1}
            sx={{ p: 1, px: 2, mb: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
          >
            폐기물
          </Paper>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
              <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
              <Paper
                elevation={1}
                sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
              >
                생활폐기물
              </Paper>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
              <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
              <Paper
                elevation={1}
                sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
              >
                사업장폐기물
              </Paper>
              <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                  <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                  <Paper
                    elevation={1}
                    sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
                  >
                    지정폐기물
                    <Typography variant="caption" display="block">
                      (의료 포함)
                    </Typography>
                  </Paper>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                  <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                  <Paper
                    elevation={1}
                    sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
                  >
                    건설폐기물
                  </Paper>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                  <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                  <Paper
                    elevation={1}
                    sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
                  >
                    사업장 일반 폐기물
                  </Paper>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                  <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                  <Paper
                    elevation={1}
                    sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
                  >
                    사업장 비배출시설계폐기물
                  </Paper>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                  <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                  <Paper
                    elevation={1}
                    sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
                  >
                    사업장 배출시설계폐기물
                  </Paper>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd', mt: 2 }} />
          <Paper
            elevation={1}
            sx={{ p: 1, px: 2, bgcolor: '#e8f5e9', fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}
          >
            생활폐기물
          </Paper>
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
          [폐기물관리법 상 폐기물의 분류]
        </Typography>
      </Box>
    </Box>
  );
}

export default BizTrash;
