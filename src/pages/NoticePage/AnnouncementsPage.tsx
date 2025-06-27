import { Container, Typography } from '@mui/material';
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
  // 검색 결과에 따라 필터링된 FAQ를 저장할 새로운 상태
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<AnnouncementsItem[]>([]);

  // useEffect에서 초기 데이터를 불러온 후 filteredAnnouncements도 초기화합니다.
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const announcementsCollectionRef = collection(db, 'Announcements');
        const q = query(announcementsCollectionRef, orderBy('index', 'desc'));

        const querySnapshot = await getDocs(q);

        const fetchedAnnouncements: AnnouncementsItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedAnnouncements.push({
            id: doc.id, // !!! 여기에서 문서 ID를 가져와 AnnouncementsItem에 추가합니다.
            ...(doc.data() as Omit<AnnouncementsItem, 'id'>), // AnnouncementsItem에서 id 필드를 제외한 나머지 데이터를 가져옴
          });
        });
        setAnnouncements(fetchedAnnouncements);
        setFilteredAnnouncements(fetchedAnnouncements);
      } catch (err) {
        console.error('Error fetching documents: ', err);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSearch = (searchTerm: string) => {
    // 검색어가 비어있으면 전체 FAQ를 표시합니다.
    if (!searchTerm.trim()) {
      setFilteredAnnouncements(announcements);
      return;
    }

    // 검색어를 소문자로 변환하여 비교할 준비를 합니다.
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // announcements 배열에서 검색어에 맞는 항목을 필터링합니다.
    const results = announcements.filter((announcement) => {
      // announcement 제목에 검색어가 포함되어 있는지 확인
      const titleMatches = announcement.title.toLowerCase().includes(lowerCaseSearchTerm);
      return titleMatches;
    });

    setFilteredAnnouncements(results);
  };

  if (loading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (announcements.length === 0 && !loading) {
    return <div>아직 등록된 FAQ가 없습니다.</div>;
  }
  console.log(announcements);

  return (
    <Container maxWidth="md">
      <Typography variant="h6" textAlign="center">
        공지사항
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {filteredAnnouncements.length > 0 ? (
        <AnnouncementTable data={filteredAnnouncements} />
      ) : (
        <Typography variant="body1" textAlign="center" sx={{ mt: 3 }}>
          검색 결과가 없습니다.
        </Typography>
      )}
    </Container>
  );
};

export default AnnouncementsPage;
