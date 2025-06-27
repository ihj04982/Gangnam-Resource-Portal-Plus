import CircleMenu from './component/menu/CircleMenu';
import PhoneMenu from './component/menu/PhoneMenu';
import { ProSidebarProvider } from 'react-pro-sidebar';

const CleanMainPage = () => {
  return (
    <div>
      {/* <CircleMenu></CircleMenu> */}
      <ProSidebarProvider>
        <PhoneMenu></PhoneMenu>
      </ProSidebarProvider>
    </div>
  );
};

export default CleanMainPage;
