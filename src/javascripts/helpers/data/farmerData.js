import axios from 'axios';

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmers.json')
    .then((response) => {
      const demfamers = response.data.farmers;
      const farmers = [];
      Object.keys(demfamers).forEach((farmerid) => {
        demfamers[farmerid].id = farmerid;
        farmers.push(demfamers[farmerid]);
      });
      // resolve(response.data.farmers);
      resolve(farmers);
    })
    .catch((error) => reject(error));
});
export default { getFarmers };
