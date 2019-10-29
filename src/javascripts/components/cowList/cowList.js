import c from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  c.getCows()
    .then((response) => {
      // console.log(response);
      console.log('cow array from cow list', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
