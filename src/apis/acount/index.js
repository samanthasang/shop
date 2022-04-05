import HttpClient from '../HttpClient';
import AP from '../../helper/Routes/api';

class AcountApiClass extends HttpClient {
  constructor() {
    super(AP.root + AP.version);
  }

  login = payload => this.instance.post(AP.Account.login, payload);

  register = payload =>
    this.instance.post(AP.Dashboard.registerCustomer, payload);
}

const AcountApi = new AcountApiClass();
export default AcountApi;
