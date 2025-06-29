import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { useState } from 'react';

const PhoneVerificationPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSendCode = () => {
    // TODO: 인증번호 발송 로직
    alert(`인증번호 발송: ${phone}`);
  };

  return (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h5" gutterBottom>
        ▪ 휴대폰 인증
      </Typography>

      <Paper sx={{ mt: 2, p: 3, border: '1px solid #ccc', borderRadius: 1, bgcolor: '#fff', width: '80%', ml: '40px' }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          휴대폰 인증
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, sm: 2 }}>
            <Typography>이름</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 10 }}>
            <TextField
              size="small"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ width: '367px' }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 2 }}>
            <Typography>휴대폰 번호</Typography>
          </Grid>
          <Grid container size={{ xs: 12, sm: 10 }} spacing={0}>
            <Grid size={{ xs: 9 }} sx={{ p: 0 }}>
              <TextField
                size="small"
                placeholder="휴대폰 번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ width: '90%' }}
              />
            </Grid>
            <Grid size={{ xs: 3 }} sx={{ p: 0 }}>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ height: '100%' }} // ✅ 입력 필드와 높이 동일
                fullWidth
                onClick={handleSendCode}
              >
                인증번호 발송
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Typography sx={{ mt: 2, fontSize: 13, color: '#777' }}>
          ※ 정확한 정보 입력 후 인증번호를 받아주세요.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PhoneVerificationPage;
