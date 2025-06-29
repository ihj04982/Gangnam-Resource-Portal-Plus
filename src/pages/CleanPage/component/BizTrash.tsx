import { Box, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';

function BizTrash() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            backgroundColor: '#4CAF50',
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
              backgroundColor: '#4CAF50',
              mr: 1,
              verticalAlign: 'middle',
            }}
          />
          사업장폐기물의 정의
        </Typography>
        <Typography variant="body2" sx={{ ml: 2, lineHeight: 1.6 }}>
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
              backgroundColor: '#4CAF50',
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
          {/* 최상단 분류 */}
          <Paper
            elevation={1}
            sx={{
              p: 1,
              px: 2,
              mb: 2,
              bgcolor: '#e8f5e9',
              fontWeight: 'bold',
              width: '100%',
              maxWidth: 300,
              textAlign: 'center',
            }}
          >
            폐기물
          </Paper>

          {/* 첫 단계 분류 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              gap: 2,
            }}
          >
            {['생활폐기물', '사업장폐기물'].map((label, idx) => (
              <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                <Paper
                  elevation={1}
                  sx={{
                    p: 1,
                    px: 2,
                    bgcolor: '#e8f5e9',
                    fontWeight: 'bold',
                    width: '100%',
                    maxWidth: 300,
                    textAlign: 'center',
                    mb: 1,
                  }}
                >
                  {label}
                </Paper>

                {label === '사업장폐기물' && (
                  <>
                    {/* 하위 분류 1 */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      {[
                        { label: '지정폐기물', caption: '(의료 포함)' },
                        { label: '건설폐기물' },
                        { label: '사업장 일반 폐기물' },
                      ].map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                          <Paper
                            elevation={1}
                            sx={{
                              p: 1,
                              px: 2,
                              bgcolor: '#e8f5e9',
                              fontWeight: 'bold',
                              width: '100%',
                              maxWidth: 300,
                              textAlign: 'center',
                            }}
                          >
                            {item.label}
                            {item.caption && (
                              <Typography variant="caption" display="block">
                                {item.caption}
                              </Typography>
                            )}
                          </Paper>
                        </Box>
                      ))}
                    </Box>

                    {/* 하위 분류 2 */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      {['사업장 비배출시설계폐기물', '사업장 배출시설계폐기물'].map((text, j) => (
                        <Box key={j} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Box sx={{ width: '2px', height: '20px', bgcolor: '#bdbdbd' }} />
                          <Paper
                            elevation={1}
                            sx={{
                              p: 1,
                              px: 2,
                              bgcolor: '#e8f5e9',
                              fontWeight: 'bold',
                              width: '100%',
                              maxWidth: 300,
                              textAlign: 'center',
                            }}
                          >
                            {text}
                          </Paper>
                        </Box>
                      ))}
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 3, display: 'block', textAlign: 'center' }}>
          [폐기물관리법 상 폐기물의 분류]
        </Typography>
      </Box>
    </Box>
  );
}

export default BizTrash;
