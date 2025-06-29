import useFluorescentBattery from '../../hooks/useFluorescentBattery';
import useWasteBag from '../../hooks/useWasteBag';
import useCigaretteButt from '../../hooks/useCigaretteButt';
import useClothingCollection from '../../hooks/useClothingCollection';
import NaverMap from './component/NaverMap';
import { Box, Button, styled, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteIcon from '@mui/icons-material/Delete';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import theme from '../../theme';
import { useState } from 'react';
import type { SimpleLocation } from './component/NaverMap';
import useMediaQuery from '@mui/material/useMediaQuery';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 0,
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: 331,
  borderRight: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderRight: 'none',
    borderTop: '1px solid #eee',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 0,
    background: '#fff',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.07)',
    position: 'static',
    bottom: 'unset',
    left: 'unset',
    zIndex: 'auto',
  },
}));

const SidebarGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
  width: '100%',
  justifyItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    gap: '0',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px 0',
  },
}));

const SidebarGridButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 100,
  borderRadius: 12,
  border: '1px solid #eee',
  background: theme.palette.background.default,
  '&:active': {
    background: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 80,
    minHeight: 80,
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: '0 4px',
    fontSize: '12px',
    padding: 0,
  },
}));

const IconBox = styled('div')(({ theme }) => ({
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 6,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 2,
  },
}));

const SidebarButtonText = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  textAlign: 'center',
  overflowWrap: 'break-word',
  lineHeight: 1.2,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '11px',
    lineHeight: 1.1,
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    minHeight: '400px',
    paddingBottom: 0,
  },
}));

const LocationPage = () => {
  const { data: fluorescent, isLoading: isLoadingFluorescent, error: errorFluorescent } = useFluorescentBattery(1, 155);
  const { data: wasteBag, isLoading: isLoadingWasteBag, error: errorWasteBag } = useWasteBag(1, 1225);
  const { data: cigaretteButt, isLoading: isLoadingCigaretteButt, error: errorCigaretteButt } = useCigaretteButt(1, 45);
  const {
    data: clothingCollection,
    isLoading: isLoadingClothingCollection,
    error: errorClothingCollection,
  } = useClothingCollection(1, 667);

  const [selectedType, setSelectedType] = useState<'fluorescent' | 'wasteBag' | 'cigaretteButt' | 'clothingCollection'>(
    'fluorescent',
  );
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoadingFluorescent || isLoadingWasteBag || isLoadingCigaretteButt || isLoadingClothingCollection) {
    return <div>Loading...</div>;
  }

  if (errorFluorescent || errorWasteBag || errorCigaretteButt || errorClothingCollection) {
    return <div>Error occurred!</div>;
  }

  const fluorescentLocations =
    fluorescent?.map((item) => ({
      address: item.설치위치,
      label: `[${item.수거품목}] ${item.동명}`,
    })) || [];

  const wasteBagLocations =
    wasteBag?.map((item) => ({
      address: item.주소,
      label: item.판매처명,
    })) || [];

  const cigaretteButtLocations =
    cigaretteButt?.map((item) => ({
      address: item['위 치'] || item.설치주소,
      label: `[${item.동명}] ${item.설치주소}`,
    })) || [];

  const clothingCollectionLocations =
    clothingCollection
      ?.map((item) => ({
        lat: parseFloat(item.위도),
        lng: parseFloat(item.경도),
        address: item['도로명 주소'] || item.지번주소,
        label: item['도로명 주소'] || item.지번주소,
      }))
      .filter((item) => !isNaN(item.lat) && !isNaN(item.lng)) || [];

  let locations: SimpleLocation[] = [];
  if (selectedType === 'fluorescent') {
    locations = fluorescentLocations;
  } else if (selectedType === 'wasteBag') {
    locations = wasteBagLocations;
  } else if (selectedType === 'cigaretteButt') {
    locations = cigaretteButtLocations;
  } else if (selectedType === 'clothingCollection') {
    locations = clothingCollectionLocations;
  }

  return (
    <Container>
      {!isMobile && (
        <Sidebar>
          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 2 }}>
            위치정보
          </Typography>
          <SidebarGrid>
            <SidebarGridButton onClick={() => setSelectedType('fluorescent')}>
              <IconBox>
                <LightbulbIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>폐형광등 폐건전지</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('wasteBag')}>
              <IconBox>
                <DeleteIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>쓰레기봉투 판매처</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('cigaretteButt')}>
              <IconBox>
                <SmokingRoomsIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>담배꽁초 수거함</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('clothingCollection')}>
              <IconBox>
                <CheckroomIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>의류수거함</SidebarButtonText>
            </SidebarGridButton>
          </SidebarGrid>
        </Sidebar>
      )}
      <MapContainer>
        <NaverMap locations={locations} />
      </MapContainer>
      {isMobile && (
        <Sidebar>
          <SidebarGrid>
            <SidebarGridButton onClick={() => setSelectedType('fluorescent')}>
              <IconBox>
                <LightbulbIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>폐형광등 폐건전지</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('wasteBag')}>
              <IconBox>
                <DeleteIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>쓰레기봉투 판매처</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('cigaretteButt')}>
              <IconBox>
                <SmokingRoomsIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>담배꽁초 수거함</SidebarButtonText>
            </SidebarGridButton>
            <SidebarGridButton onClick={() => setSelectedType('clothingCollection')}>
              <IconBox>
                <CheckroomIcon fontSize="large" />
              </IconBox>
              <SidebarButtonText>의류수거함</SidebarButtonText>
            </SidebarGridButton>
          </SidebarGrid>
        </Sidebar>
      )}
    </Container>
  );
};

export default LocationPage;
