import c from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  c.getCows()
    .then((response) => {
      // console.log(response);
      const demCows = response.data.c;
      console.log(demCows);
      const cows = [];
      Object.keys(demCows).forEach((cowId) => {
        demCows[cowId].id = cowId;
        cows.push(demCows[cowId]);
      });
      console.log('it worked!', cows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
