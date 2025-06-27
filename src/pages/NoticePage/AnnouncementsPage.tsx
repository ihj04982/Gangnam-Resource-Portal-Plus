import { Container, Typography, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import type { AnnouncementsItem } from '../../models/notice';
import SearchBar from './components/SearchBar';
import AnnouncementTable from './components/Announcements/AnnouncementTable';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<AnnouncementsItem[]>([]);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // 페이지당 표시할 항목 수

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const announcementsCollectionRef = collection(db, 'Announcements');
        const q = query(announcementsCollectionRef, orderBy('index', 'desc'));

        const querySnapshot = await getDocs(q);

        const fetchedAnnouncements: AnnouncementsItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedAnnouncements.push({
            id: doc.id,
            ...(doc.data() as Omit<AnnouncementsItem, 'id'>),
          });
        });
        setAnnouncements(fetchedAnnouncements);
        setFilteredAnnouncements(fetchedAnnouncements); // 초기 filteredAnnouncements를 모든 데이터로 초기화합니다.
      } catch (err) {
        console.error('문서 가져오기 오류: ', err);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredAnnouncements(announcements);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = announcements.filter((announcement) => {
        const titleMatches = announcement.title.toLowerCase().includes(lowerCaseSearchTerm);
        // 공지사항 내용은 현재 검색에 포함되지 않으므로, 제목만 확인합니다.
        // 만약 공지사항 내용도 검색하고 싶다면 아래 주석을 해제하고 AnnouncementsItem에 contents 필드가 있는지 확인하세요.
        // const contentMatches = announcement.contents?.some((line) => line.toLowerCase().includes(lowerCaseSearchTerm));
        // return titleMatches || contentMatches;
        return titleMatches;
      });
      setFilteredAnnouncements(results);
    }
    setCurrentPage(1); // 새 검색이 수행될 때 첫 페이지로 재설정합니다.
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredAnnouncements.length / itemsPerPage);

  // 현재 페이지에 표시할 공지사항 가져오기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  // 데이터가 없으면서 로딩 중이 아닐 때 메시지 표시
  if (announcements.length === 0 && !loading) {
    return (
      <Container maxWidth="md" sx={{ my: '2rem' }}>
        <Typography variant="h6" textAlign="center">
          공지사항
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mt: 3 }}>
          아직 등록된 공지사항이 없습니다.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ my: '2rem' }}>
      <Typography variant="h6" textAlign="center" sx={{ mb: 4 }}>
        공지사항
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {currentAnnouncements.length > 0 ? (
        <>
          <AnnouncementTable data={currentAnnouncements} /> {/* 현재 페이지의 공지사항만 렌더링합니다. */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />
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

export default AnnouncementsPage;
