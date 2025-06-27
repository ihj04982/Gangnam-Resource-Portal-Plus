import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Container, Typography, Paper, Box } from '@mui/material';
import { db } from '../../firebaseConfig';
import type { FaqItem } from '../../models/notice';

const FaqDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 문서 ID를 id로 가져옵니다.
  const [faq, setFaq] = useState<FaqItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqDetail = async () => {
      if (!id) {
        // faqIndex 대신 id 사용
        setError('유효하지 않은 FAQ ID입니다.');
        setLoading(false);
        return;
      }

      try {
        // 문서 ID로 직접 문서 참조를 생성
        const docRef = doc(db, 'faq', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFaq({
            id: docSnap.id, // 가져온 문서의 ID를 FaqItem에 추가
            ...(docSnap.data() as Omit<FaqItem, 'id'>),
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

    fetchFaqDetail();
  }, [id]); // id가 변경되면 이펙트 다시 실행

  if (loading) {
    return (
      <Container maxWidth="md">
        <Typography>FAQ를 불러오는 중...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Typography color="error">오류: {error}</Typography>
      </Container>
    );
  }

  if (!faq) {
    return (
      <Container maxWidth="md">
        <Typography>해당 FAQ가 존재하지 않습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
          {faq.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          등록일: {faq.date}
        </Typography>
        <Box>
          {faq.contents.map(
            (
              line,
              idx, // map 함수의 두 번째 인자는 index이므로 충돌 방지를 위해 idx로 변경
            ) => (
              <Typography key={idx} variant="body1" paragraph>
                {line}
              </Typography>
            ),
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default FaqDetail;
