import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from '../../db/farmerCows';
import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmerCows().then((farmerCows) => {
    // farmercows should be an array of farmercow objects
    // they should have the farmercow id in the them
    console.log('from main.js', farmerCows);
  }).catch((error) => console.log(error));
};

init();
