import { Outlet } from 'react-router';
import { styled } from '@mui/material/styles';

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  boxSizing: 'border-box',
});

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: '0 16px',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const Content = styled('div')({
  flex: 1,
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  overflow: 'auto',
});

const Footer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px',
  padding: '0 16px',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
}));

const AppLayout = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
