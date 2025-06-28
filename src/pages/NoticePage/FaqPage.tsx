import { Container, Typography, Box, CircularProgress } from '@mui/material'; // Box를 임포트하여 유연한 레이아웃을 만듭니다.
import Pagination from '@mui/material/Pagination'; // Pagination 컴포넌트를 임포트합니다.
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import FaqTable from './components/Faqs/FaqTable';
import SearchBar from './components/SearchBar';
import type { FaqItem } from '../../models/notice';

const FaqPage = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>([]);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // 페이지당 표시할 항목 수

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqsCollectionRef = collection(db, 'faq');
        const q = query(faqsCollectionRef, orderBy('index', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedFaqs: FaqItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedFaqs.push({
            id: doc.id,
            ...(doc.data() as Omit<FaqItem, 'id'>),
          });
        });
        setFaqs(fetchedFaqs);
        setFilteredFaqs(fetchedFaqs); // 초기 filteredFaqs를 모든 데이터로 초기화합니다.
      } catch (err) {
        console.error('문서 가져오기 오류: ', err);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredFaqs(faqs);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = faqs.filter((faq) => {
        const titleMatches = faq.title.toLowerCase().includes(lowerCaseSearchTerm);
        const contentMatches = faq.contents.some((line) => line.toLowerCase().includes(lowerCaseSearchTerm));
        return titleMatches || contentMatches;
      });
      setFilteredFaqs(results);
    }
    setCurrentPage(1); // 새 검색이 수행될 때 첫 페이지로 재설정합니다.
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);

  // 현재 페이지에 표시할 FAQ 가져오기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (faqs.length === 0 && !loading) {
    return <div>아직 등록된 FAQ가 없습니다.</div>;
  }

  return (
    <Container maxWidth="md" sx={{ my: '2rem' }}>
      <Typography variant="h6" textAlign="center" sx={{ mb: 4 }}>
        자주 묻는 질문
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {currentFaqs.length > 0 ? (
        <>
          <FaqTable data={currentFaqs} /> {/* 현재 페이지의 FAQ만 렌더링합니다. */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              sx={{ my: '1rem' }}
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Typography variant="body1" textAlign="center" sx={{ mt: 3 }}>
          검색 결과가 없습니다.
        </Typography>
      )}
    </Container>
  );
};

export default FaqPage;
