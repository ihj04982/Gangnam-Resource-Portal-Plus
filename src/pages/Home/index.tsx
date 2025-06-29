import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import RecyclingBagIcon from '../../assets/svg/RecyclingBagIcon';
import RecyclingBinIcon from '../../assets/svg/RecyclingBinIcon';
import RecyclingHandIcon from '../../assets/svg/RecyclingHandIcon';
import { db } from '../../firebaseConfig';
import type { AnnouncementsItem, FaqItem } from '../../models/notice';
import { BASE_FONT_STYLE, BASE_RESET_STYLE } from '../../shared/styles/commonStyles';
import { COLORS } from '../../theme';
import BannerLeftContents from './component/BannerLeftContents';
import InfoSection from './component/InfoSection';
import MainVisualContainer from './component/MainVisual';
import ServiceCard from './component/ServiceCard';
import ServiceCardGrid from './component/ServiceCard/ServiceCardGrid';
import ServiceShortcutSection from './component/ServiceShortcutSection';

const HomePage: React.FC = () => {
  const [faqItems, setFaqItems] = useState<Array<{ id: string | number; text: string; link?: string }>>([]);
  const [noticeItems, setNoticeItems] = useState<Array<{ id: string | number; text: string; link?: string }>>([]);
  const [loading, setLoading] = useState(true);

  const homeContainerStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    position: 'relative' as const,
    backgroundColor: COLORS.BACKGROUND_GRAY,
    paddingBottom: '60px',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqCollectionRef = collection(db, 'faq');
        const faqQuery = query(faqCollectionRef, orderBy('index', 'desc'), limit(4));
        const faqSnapshot = await getDocs(faqQuery);

        const faqs = faqSnapshot.docs.map((doc) => {
          const data = doc.data() as Omit<FaqItem, 'id'>;
          return {
            id: doc.id,
            text: data.title,
            link: `/notice/faq/${doc.id}`,
          };
        });
        setFaqItems(faqs);

        const announcementsCollectionRef = collection(db, 'Announcements');
        const announcementsQuery = query(announcementsCollectionRef, orderBy('index', 'desc'), limit(4));
        const announcementsSnapshot = await getDocs(announcementsQuery);

        const announcements = announcementsSnapshot.docs.map((doc) => {
          const data = doc.data() as Omit<AnnouncementsItem, 'id'>;
          return {
            id: doc.id,
            text: data.title,
            link: `/notice/announcements/${doc.id}`,
          };
        });
        setNoticeItems(announcements);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLargeWasteClick = () => {
    window.location.href = '/largewaste/registration';
  };

  const handleRecycleClick = () => {
    window.location.href = '/clean/recycle';
  };

  const handleBagLocationClick = () => {
    window.location.href = '/locations';
  };

  return (
    <div style={homeContainerStyle}>
      <MainVisualContainer>
        <ServiceCardGrid>
          <BannerLeftContents />
        </ServiceCardGrid>
        <ServiceCardGrid>
          <ServiceCard
            icon={<RecyclingBinIcon />}
            title={
              <>
                대형생활폐기물
                <br />
                배출신청
              </>
            }
            description={
              <>
                수거대상 물품·수수료확인 및<br />
                폐기물수거 신청하기
              </>
            }
            onClick={handleLargeWasteClick}
          />
          <ServiceCard
            icon={<RecyclingHandIcon />}
            title={
              <>
                재활용
                <br />
                분리배출
              </>
            }
            description={
              <>
                자원별 올바른 배출 방법을
                <br />
                확인해보세요
              </>
            }
            onClick={handleRecycleClick}
          />
          <ServiceCard
            icon={<RecyclingBagIcon />}
            title={
              <>
                종량제봉투
                <br />
                판매소
              </>
            }
            description={
              <>
                시설·지역별 위치정보로
                <br />
                간편하게 확인해보세요.
              </>
            }
            onClick={handleBagLocationClick}
          />
        </ServiceCardGrid>
      </MainVisualContainer>

      <ServiceShortcutSection />

      {!loading && (
        <>
          <InfoSection title="FAQ 자주 묻는 질문" moreLink="/notice/faq" items={faqItems} />

          <InfoSection title="NOTICE 공지사항" moreLink="/notice/announcements" items={noticeItems} />
        </>
      )}
    </div>
  );
};

export default HomePage;
