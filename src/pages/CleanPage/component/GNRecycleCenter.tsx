import { Paper, Typography, Box } from '@mui/material';

const categories = [
  { label: '플라스틱류', eng: 'Plastic Pet', color: '#1E90FF', icon: '💟' },
  { label: '캔 · 병류', eng: 'Can Glass', color: '#FFA500', icon: '🍺' },
  { label: '투명페트병', eng: 'PET', color: '#ADFF2F', icon: '💧' },
  { label: '비닐류', eng: 'Vinyl', color: '#DA70D6', icon: '👜' },
];

export default function GNRecycleCenter() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        재활용 정거장 예시
      </Typography>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          borderRadius: 3,
          overflow: 'hidden',
          border: '4px solid #ccc',
          p: 2,
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 20%',
              minWidth: 120,
              m: 1,
              textAlign: 'center',
              backgroundColor: cat.color,
              color: '#fff',
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {cat.icon} {cat.label}
            </Typography>
            <Typography variant="body2">{cat.eng}</Typography>
          </Box>
        ))}
      </Paper>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        * 분리수가판 모양은 변경될 수 있음
      </Typography>
    </Box>
  );
}
