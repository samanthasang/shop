import HttpClient from '../HttpClient';
import AP from '../../helper/Routes/api';

class AcountApiClass extends HttpClient {
  constructor() {
    super(AP.root + AP.version);
  }

  login = payload => this.instance.post(`${AP.Account.login}?${payload}`);
  register = payload => {
    this.instance.post(`${AP.Account.registerCustomer}?${payload}`);
  };
}

const AcountApi = new AcountApiClass();
export default AcountApi;

// http://app.barexp.com/api/v1/Account/login?email=pooriadaloochi%40gamil.com&password=61541241
