import { Container, Typography } from '@mui/material';
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
  // 검색 결과에 따라 필터링된 FAQ를 저장할 새로운 상태
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>([]);

  // useEffect에서 초기 데이터를 불러온 후 filteredFaqs도 초기화합니다.
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqsCollectionRef = collection(db, 'faq');
        const q = query(faqsCollectionRef, orderBy('index', 'desc'));

        const querySnapshot = await getDocs(q);

        const fetchedFaqs: FaqItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedFaqs.push({
            id: doc.id, // !!! 여기에서 문서 ID를 가져와 FaqItem에 추가합니다.
            ...(doc.data() as Omit<FaqItem, 'id'>), // FaqItem에서 id 필드를 제외한 나머지 데이터를 가져옴
          });
        });
        setFaqs(fetchedFaqs);
        setFilteredFaqs(fetchedFaqs);
      } catch (err) {
        console.error('Error fetching documents: ', err);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleSearch = (searchTerm: string) => {
    // 검색어가 비어있으면 전체 FAQ를 표시합니다.
    if (!searchTerm.trim()) {
      setFilteredFaqs(faqs);
      return;
    }

    // 검색어를 소문자로 변환하여 비교할 준비를 합니다.
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // faqs 배열에서 검색어에 맞는 항목을 필터링합니다.
    const results = faqs.filter((faq) => {
      // FAQ 제목에 검색어가 포함되어 있는지 확인
      const titleMatches = faq.title.toLowerCase().includes(lowerCaseSearchTerm);
      // FAQ 내용에 검색어가 포함되어 있는지 확인 (각 줄을 확인)
      const contentMatches = faq.contents.some((line) => line.toLowerCase().includes(lowerCaseSearchTerm));
      return titleMatches || contentMatches;
    });

    setFilteredFaqs(results);
  };

  if (loading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (faqs.length === 0 && !loading) {
    return <div>아직 등록된 FAQ가 없습니다.</div>;
  }
  console.log(faqs);
  return (
    <Container maxWidth="md">
      <Typography variant="h6" textAlign="center" sx={{ mb: 4 }}>
        자주 묻는 질문
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {filteredFaqs.length > 0 ? (
        <FaqTable data={filteredFaqs} />
      ) : (
        <Typography variant="body1" textAlign="center" sx={{ mt: 3 }}>
          검색 결과가 없습니다.
        </Typography>
      )}
    </Container>
  );
};

export default FaqPage;
