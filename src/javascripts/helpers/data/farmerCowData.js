import axios from 'axios';

const getFarmerCow = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCowData.json')
    .then((response) => {
      const demFarmerCow = response.data.farmerCows;
      const farmerCows = [];
      demFarmerCow.forEach((farmerCowId) => {
        demFarmerCow[farmerCowId].id = farmerCowId;
        farmerCows.push(farmerCowId);
      });
      resolve(farmerCows);
    })
    .catch((error) => reject(error));
});
export default { getFarmerCow };
