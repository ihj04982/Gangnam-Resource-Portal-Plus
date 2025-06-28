import useFluorescentBattery from '../../hooks/useFluorescentBattery';
import useWasteBag from '../../hooks/useWasteBag';
import useCigaretteButt from '../../hooks/useCigaretteButt';
import useClothingCollection from '../../hooks/useClothingCollection';
import NaverMap from './component/NaverMap';

const LocationPage = () => {
  const { data: fluorescent, isLoading: isLoadingFluorescent, error: errorFluorescent } = useFluorescentBattery();
  const { data: wasteBag, isLoading: isLoadingWasteBag, error: errorWasteBag } = useWasteBag();
  const { data: cigaretteButt, isLoading: isLoadingCigaretteButt, error: errorCigaretteButt } = useCigaretteButt();
  const {
    data: clothingCollection,
    isLoading: isLoadingClothingCollection,
    error: errorClothingCollection,
  } = useClothingCollection();

  if (isLoadingFluorescent || isLoadingWasteBag || isLoadingCigaretteButt || isLoadingClothingCollection) {
    return <div>Loading...</div>;
  }

  if (errorFluorescent || errorWasteBag || errorCigaretteButt || errorClothingCollection) {
    return <div>Error occurred!</div>;
  }

  const fluorescentLocations =
    fluorescent?.map((item) => ({
      address: item.설치위치,
      label: item.동명,
    })) || [];

  const wasteBagLocations =
    wasteBag?.map((item) => ({
      address: item.주소,
      label: item.판매처명,
    })) || [];

  const cigaretteButtLocations =
    cigaretteButt?.map((item) => ({
      address: item['위 치'] || item.설치주소,
      label: item.설치주소,
    })) || [];

  return (
    <div>
      {clothingCollection && (
        <NaverMap
          clothingCollection={clothingCollection}
          fluorescentLocations={fluorescentLocations}
          wasteBagLocations={wasteBagLocations}
          cigaretteButtLocations={cigaretteButtLocations}
        />
      )}
    </div>
  );
};

export default LocationPage;
