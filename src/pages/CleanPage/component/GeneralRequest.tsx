import React from 'react';
import { Typography, Box, Button, Paper, SvgIcon } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // 화살표 아이콘

function GeneralRequest() {
  const steps = [
    { number: 1, title: '주민', description: '민원신청' },
    { number: 2, title: '서울특별시', description: '민원접수' },
    { number: 3, title: '강남구', description: '민원처리' },
    { number: 4, title: '강남구', description: '민원처리완료' },
  ];

  return (
    <Box sx={{ p: 3 }}>
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
        일반민원
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
              backgroundColor: '#4CAF50', // Green color for bullet point
              mr: 1,
              verticalAlign: 'middle',
            }}
          />
          신청 방법
        </Typography>
        <Typography variant="body1" sx={{ ml: 2, mb: 2 }}>
          강남구 청소 · 쓰레기 수거 등 관련 민원은 서울특별시 응답소를 통하여 처리됩니다.
        </Typography>
        <Button
          variant="outlined"
          href="https://eungdapso.seoul.go.kr/" // 예시 링크
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            ml: 2,
            borderColor: '#4CAF50',
            color: '#4CAF50',
            '&:hover': {
              backgroundColor: '#e8f5e9',
              borderColor: '#388E3C',
            },
            fontWeight: 'bold',
          }}
        >
          서울특별시 응답소{' '}
          <SvgIcon sx={{ ml: 0.5 }}>
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </SvgIcon>
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ ml: 2, mt: 1 }}>
          ※ 서울시 응답소에 접수된 민원은 아래 5단계로 처리됩니다.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Paper
              elevation={0}
              sx={{
                width: 150,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#e8f5e9', // Light green background
                borderRadius: '8px',
                p: 2,
                textAlign: 'center',
                flexShrink: 0, // Prevent shrinking
                mb: { xs: 2, md: 0 }, // Margin bottom for small screens
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  bgcolor: '#4CAF50', // Green circle
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                {step.number}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
            {index < steps.length - 1 && <ArrowForwardIosIcon sx={{ color: '#bdbdbd', mx: 2, my: { xs: 1, md: 0 } }} />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default GeneralRequest;
