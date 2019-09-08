/* eslint-disable */
import axios from 'axios';
import cookie from 'js-cookie';

const rfToken = cookie.get('_csrf');
const requester = (url, body) => {
  const options = {
    method: 'post',
    url,
    data: {
      _csrf: rfToken,
      ...body,
    },
  };
  return axios(options)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

export default requester;
