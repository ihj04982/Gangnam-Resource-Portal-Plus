// src/components/FacilityStatus.tsx
import { Box, Typography, Button, Paper } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // 새 창 열기 아이콘

// 내부 이미지 경로 (가정)
import FacilityStatusImage from '/contents/images/envrecenter.png'; // 이 경로는 실제 이미지 파일 경로에 맞게 수정해주세요.

function Trash() {
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
        시설 현황
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="outlined"
          href="https://eungdapso.seoul.go.kr/" // 예시 링크, 실제 링크로 변경 필요
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: '#4CAF50',
            color: '#4CAF50',
            '&:hover': {
              backgroundColor: '#e8f5e9',
              borderColor: '#388E3C',
            },
            fontWeight: 'bold',
            fontSize: '0.8rem',
            py: 0.5,
            px: 1,
          }}
          startIcon={<OpenInNewIcon sx={{ fontSize: '1rem' }} />}
        >
          서울특별시 자원회수시설 바로가기
        </Button>
      </Box>

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
          src={FacilityStatusImage}
          alt="강남 자원 회수 시설"
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
          강남자원회수시설(광역 생활폐기물 소각 처리시설)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 운영목적:
          </Typography>{' '}
          종량제봉투 쓰레기 소각 처리
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 위 치:
          </Typography>{' '}
          강남구 남부순환로 3318(일원동)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 준공일자:
          </Typography>{' '}
          2001.12.31. (1994.12.30. 착공)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 설계시공:
          </Typography>{' '}
          SK건설, 현대건설
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 규 모:
          </Typography>{' '}
          부지면적 63,818㎡ / 연면적 27,195㎡
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 용 량:
          </Typography>{' '}
          900톤/일 (300톤 3기)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 운영기관:
          </Typography>{' '}
          서울특별시
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            • 운영업체:
          </Typography>{' '}
          한독산업개발(주) 위탁운영 (2023.6.1.)
        </Typography>
      </Box>
    </Box>
  );
}

export default Trash;
