import axios from 'axios';

export const baseUrl = 'https://94b075af-6c77-4aca-b035-3d11cefece2b.mock.pstmn.io';

const composeData = (method, body) =>
  method === 'post' || method === 'put' ? { data: body } : {};

const apiCall = (url, method, body) => {
  const requestUrl = `${baseUrl}${url}`;
  return axios({
    method,
    url: requestUrl,
    ...composeData(method, body),
  });
};

export default apiCall;
