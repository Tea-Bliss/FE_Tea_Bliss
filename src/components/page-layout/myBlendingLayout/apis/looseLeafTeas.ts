import axios from 'axios';

export const getLooseLeafTeas = () => {
  return axios.get(`https://teabliss.kro.kr/api/ingredient`);
};
