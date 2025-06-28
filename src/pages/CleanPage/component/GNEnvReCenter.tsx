import { Box, Typography, Paper } from '@mui/material';

import FacilityImage from '/contents/images/rebackcenter.png'; // 이 경로는 실제 이미지 파일 경로에 맞게 수정해주세요.

function GNEnvReCenter() {
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
        시설 개요
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <Box
          component="img"
          src={FacilityImage}
          alt="강남 환경 자원 센터"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Paper>

      <Box sx={{ fontSize: '0.9rem', lineHeight: 1.8, ml: 1 }}>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 시설명:
          </Typography>{' '}
          강남환경자원센터(구립 재활용품 선별시설)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 운영목적:
          </Typography>{' '}
          재활용품 선별처리
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 준공일자:
          </Typography>{' '}
          2013. 7. 18
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 설계시공:
          </Typography>{' '}
          (주)한양, 울트라건설(주)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 규 모:
          </Typography>{' '}
          부지면적 18,125㎡ / 연면적 11,011.69㎡
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 운영기관:
          </Typography>{' '}
          강남구
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 위탁 운영업체:
          </Typography>{' '}
          (주)에코트리 위탁운영 (2024.7.1 ~ 2027.6.30.)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 재활용품 처리현황:
          </Typography>{' '}
          일평균 선별률 71% / 선별량 : 일18.781톤
        </Typography>
      </Box>
    </Box>
  );
}

export default GNEnvReCenter;
