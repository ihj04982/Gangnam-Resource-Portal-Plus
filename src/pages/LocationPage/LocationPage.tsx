import useFluorescentBattery from '../../hooks/useFluorescentBattery';
import useWasteBag from '../../hooks/useWasteBag';
import useCigaretteButt from '../../hooks/useCigaretteButt';
import useClothingCollection from '../../hooks/useClothingCollection';

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

  console.log('Fluorescent Battery:', fluorescent);
  console.log('Waste Bag:', wasteBag);
  console.log('Cigarette Butt:', cigaretteButt);
  console.log('Clothing Collection:', clothingCollection);

  return <div>{123}</div>;
};

export default LocationPage;
