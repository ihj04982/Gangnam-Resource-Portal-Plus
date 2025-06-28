import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material';

const greenShades = [
  '#e6f4ea',
  '#ccead5',
  '#b3e1c1',
  '#99d7ac',
  '#80cd97',
  '#66c482',
  '#4dba6e',
  '#33b159',
  '#1aa744',
  '#009e30',
  '#008025',
  '#00661f',
];

const CircleDivStyle = styled('div')`
  width: 80px;
  height: 80px;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  position: absolute;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
`;

const CleanMenus = [
  '생활쓰레기 처리절차',
  '재활용 분리배출',
  '투명페트병 분리배출',
  '정화조 청소',
  '커피박 수거',
  '재활용정거장 지원사업',
  '사업장 폐기물 신고',
  '청소 대행업체 현황',
  '강남 환경 자원 센터',
  '강남 자원 회수 시설',
  '자원순환 통계',
  '일반민원',
];

const CircleMenu = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [rotateDeg, setRotateDeg] = useState(0);
  const itemCount = 12;
  const radius = 200;
  const centerX = 300;
  const centerY = 300;

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const items = menu.querySelectorAll('.menu-item');

    items.forEach((item, index) => {
      const angle = ((360 / itemCount) * index + rotateDeg) % 360;
      const rad = (angle * Math.PI) / 180;
      const x = centerX + radius * Math.cos(rad) - item.clientWidth / 2;
      const y = centerY + radius * Math.sin(rad) - item.clientHeight / 2;

      const el = item as HTMLElement;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.backgroundColor = greenShades[index % greenShades.length];
    });
  }, [rotateDeg]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setRotateDeg((prev) => prev + (e.deltaY > 0 ? 15 : -15));
  };

  return (
    <>
      {' '}
      {/* 배경 하늘 영상 */}
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/contents/SSYouTube.online_(무료영상)하늘_1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <div
            id="radial-menu"
            ref={menuRef}
            onWheel={handleWheel}
            style={{
              position: 'relative',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
            }}
          >
            {CleanMenus.map((menus, i) => (
              <CircleDivStyle key={i} className="menu-item" data-index={i}>
                {menus}
              </CircleDivStyle>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleMenu;
