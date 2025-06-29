import React from 'react';
import RecyclingBagIcon from '../../assets/svg/RecyclingBagIcon';
import RecyclingBinIcon from '../../assets/svg/RecyclingBinIcon';
import RecyclingHandIcon from '../../assets/svg/RecyclingHandIcon';
import BannerLeftContents from './component/BannerLeftContents';
import MainVisualContainer from './component/MainVisual';
import ServiceCard from './component/ServiceCard';
import ServiceCardGrid from './component/ServiceCard/ServiceCardGrid';

const HomePage: React.FC = () => {
  return (
    <div>
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
          />
        </ServiceCardGrid>
      </MainVisualContainer>
    </div>
  );
};

export default HomePage;
