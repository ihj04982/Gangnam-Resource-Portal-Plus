import { Box, styled } from '@mui/material';
import React from 'react';
import BannerDescription from './BannerDescription';
import BannerTitle from './BannerTitle';

const LeftContentsContainer = styled(Box)({
  maxWidth: '450px',
});

const BannerLeftContents: React.FC = () => {
  return (
    <LeftContentsContainer className="main_top_visual_banner_left_contents">
      <BannerDescription>
        <>
          강남구는 지속적인 자원순환 실천과 관리를 통하여 <br />
          청결한 도시를 만들기 위해 노력하고 있습니다.
        </>
      </BannerDescription>
      <BannerTitle>주요서비스</BannerTitle>
    </LeftContentsContainer>
  );
};

export default BannerLeftContents;
