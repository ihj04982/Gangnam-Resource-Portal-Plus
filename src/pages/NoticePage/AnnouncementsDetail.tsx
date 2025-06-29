import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
import { db } from '../../firebaseConfig';
import type { AnnouncementsItem } from '../../models/notice';
import NoticeReturnButton from './components/NoticeReturnButton';

const AnnouncementsDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 문서 ID를 id로 가져옵니다.
  const [announcement, setAnnouncement] = useState<AnnouncementsItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAnnouncementDetail = async () => {
      if (!id) {
        // announcementIndex 대신 id 사용
        setError('유효하지 않은  공지사항 ID입니다.');
        setLoading(false);
        return;
      }

      try {
        // 문서 ID로 직접 문서 참조를 생성
        const docRef = doc(db, 'Announcements', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAnnouncement({
            id: docSnap.id, // 가져온 문서의 ID를 AnnouncementItem에 추가
            ...(docSnap.data() as Omit<AnnouncementsItem, 'id'>),
          });
        } else {
          setError('해당 FAQ를 찾을 수 없습니다.');
        }
      } catch (err) {
        console.error('Error fetching FAQ document: ', err);
        setError('FAQ 데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncementDetail();
  }, [id]); // id가 변경되면 이펙트 다시 실행

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setHasImageError(true);
  };
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Typography color="error">오류: {error}</Typography>
      </Container>
    );
  }

  if (!announcement) {
    return (
      <Container maxWidth="md">
        <Typography>해당 FAQ가 존재하지 않습니다.</Typography>
      </Container>
    );
  }
  const handleGoBackToList = () => {
    navigate('/notice'); // 공지사항 목록 페이지의 경로로 변경하세요.
  };
  return (
    <Container maxWidth="md" sx={{ padding: 0, margin: '2rem 0' }}>
      <Paper elevation={3} sx={{ p: { md: 4, sm: 2, xs: 2 }, mb: 4 }}>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mb: 4, wordBreak: 'keep-all', fontSize: { md: '1.5rem', sm: '1.2rem', xs: '1rem' } }}
        >
          {announcement.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          등록일: {announcement.date}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {!isImageLoaded && !hasImageError && (
            <Box my="3rem">
              <CircularProgress />
            </Box>
          )}
          <img
            src={announcement.url}
            alt={announcement.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: isImageLoaded ? 'block' : 'none', maxWidth: '100%' }} // 로딩 전에는 숨김
          />
        </Box>
        <NoticeReturnButton onClick={handleGoBackToList} />
      </Paper>
    </Container>
  );
};

export default AnnouncementsDetail;
