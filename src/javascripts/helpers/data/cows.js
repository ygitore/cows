import axios from 'axios';
// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');
const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    console.log(demCows);
    const cows = [];
    Object.keys(demCows).forEach((cowId) => {
      demCows[cowId].id = cowId;
      cows.push(demCows[cowId]);
    });
    // console.log('it worked!', cows);
    resolve(cows);
  }).catch((error) => reject(error));
});
export default { getCows };
