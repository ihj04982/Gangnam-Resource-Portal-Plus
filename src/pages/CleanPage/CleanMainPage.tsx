import { useEffect, useState } from 'react';
import CircleMenu from './component/menu/CircleMenu';
import PhoneMenu from './component/menu/PhoneMenu';
import { ProSidebarProvider } from 'react-pro-sidebar';
import debounce from 'lodash/debounce';

const CleanMainPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);
  return (
    <div>
      {windowSize.width > 768 ? (
        <CircleMenu />
      ) : (
        <ProSidebarProvider>
          <PhoneMenu></PhoneMenu>
        </ProSidebarProvider>
      )}
    </div>
  );
};

export default CleanMainPage;
