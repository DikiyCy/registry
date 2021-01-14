import axios from 'axios';

export default class DataService {

  constructor() {

      this._apiBase = 'http://erp.apptrix.ru/api/clients/';

  };

  postAuth = async (url, username, password) => {

    const res = await axios.post(`${this._apiBase}${url}`, { username, password});

    return res;

  };

  postRegistr = async (url, userData) => {

    const res = await axios.post(`${this._apiBase}${url}`, userData);

    return res;

  };

  getUserData = async (url) => {
    console.log(url)
    console.log(`${this._apiBase}${url}`)
    const res = await axios.get(`${this._apiBase}${url}`);

    return res;

  };

  postHeader = (check, token) => {

    axios.interceptors.request.use(req => {

      if (check) {

        req.headers.authorization = `Bearer ${token}`;
      }

      return req;

    });

  };

  postRefresh = async (url, token) => {

    const res = await axios.post(`${this._apiBase}${url}`, {token});

    return res;

  };

}
