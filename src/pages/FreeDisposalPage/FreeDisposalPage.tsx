import { Box, Button, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router';

const FreeDisposalPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 4 }}>
      {/* 소형폐가전 무상수거 안내 */}
      <Typography variant="h5" gutterBottom>
        ▪ 소형폐가전 무상수거 안내
      </Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 4, maxWidth: '60ch' }}>
        <Box sx={{ bgcolor: 'success.main', color: 'white', p: 1, fontWeight: 'bold' }}>대상품목</Box>
        <Box sx={{ p: 2 }}>
          <Typography>
            가습기, 오디오세트, 공기청정기, 정수기, 카세트라디오, 다리미, 선풍기, 탈수기, 청소기, VTR/DVD, 핸드폰,
            헤어드라이기, 에어컨 실외기, 전기히터, 전자레인지, 전기밥솥, 보안램프, 녹즙기(믹서기), 토스터기, 가스레인지,
            컴퓨터 본체, 컴퓨터 오락기, 키보드, 노트북, 스캐너, 프린터기, 복합기, 모뎀, 팩시밀리, 시계
          </Typography>
        </Box>
      </Box>

      {/* 배출방법 */}
      <Typography variant="h6" gutterBottom>
        ▪ 배출방법
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <li>소형가전만 5개 미만(1~4개) 배출 시 강남구 자원순환 종합포털에서 배출 신청</li>
        <li>소형가전을 5개 이상 배출하거나 무상 수거 대형가전 포함 시 e순환거버넌스 이용</li>
      </Box>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            title: '소형가전 5개 미만(1~4개)',
            desc: '배출 3일 전 사전신청',
            button: '수거 신청',
          },
          {
            title: '소형가전 5개 이상, 대형가전 포함 배출',
            desc: 'e순환거버넌스 수거 신청\n전화: 1599-0903',
            button: '온라인 수거 신청',
          },
        ].map((item, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <Box
              sx={{
                border: '1px solid #4caf50',
                borderRadius: 2,
                p: 2,
                textAlign: 'center',
                maxWidth: '36ch',
                height: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 180,
              }}
            >
              <Typography fontWeight="bold">{item.title}</Typography>
              <Typography whiteSpace="pre-line">{item.desc}</Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                onClick={() => {
                  if (item.button === '수거 신청') {
                    navigate('/largewaste/registration');
                  } else {
                    window.open('https://www.15990903.or.kr', '_blank');
                  }
                }}
              >
                {item.button}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 무상수거 가능한 대형폐가전 */}
      <Typography variant="h6" gutterBottom>
        ▪ 무상수거 가능한 대형폐가전 신고 안내 (e순환거버넌스)
      </Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 4, maxWidth: '60ch' }}>
        <Box sx={{ bgcolor: 'success.main', color: 'white', p: 1, fontWeight: 'bold' }}>대상품목</Box>
        <Box sx={{ p: 2 }}>
          <Typography>
            냉장고, 세탁기, 에어컨, TV, 전기오븐, 자동판매기, 러닝머신, 식기건조기, 식기세척기, 복사기, 전기정수기,
            공기청정기, 전자레인지, 제습기
          </Typography>
        </Box>
      </Box>

      {/* 무상수거 안내 */}
      <Typography variant="h6" gutterBottom>
        ▪ 무상수거
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          크기 1m 이상, <strong>훼손되지 않은 가전</strong>에 한해 가능
        </li>
        <li>
          신청 방법: 전화(☎ 1599-0903), 또는{' '}
          <Link href="https://www.15990903.or.kr" target="_blank">
            온라인 신청
          </Link>
        </li>
        <li>처리 기간: 영업일 기준 7일 이상 소요</li>
      </Box>

      {/* 유상수거 안내 */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        ▪ 유상수거
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>대상: 무상수거 요건에 해당하지 않은 대형폐가전</li>
        <li>신청방법: 배출 3일 전 자원순환 종합포털 사전 신청</li>
      </Box>
      <Box sx={{ pl: 4, mt: 1 }}>
        <Button variant="contained" color="success" onClick={() => navigate('/largewaste/registration')}>
          수거 신청
        </Button>
      </Box>
    </Box>
  );
};

export default FreeDisposalPage;
