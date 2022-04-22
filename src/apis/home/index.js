import HttpClient from '../HttpClient';
import AP from '../../helper/Routes/api';

class HomeApiClass extends HttpClient {
  constructor() {
    super(AP.root + AP.version);
  }

  allLoad = payload => this.instance.get(AP.Dashboard.allLoads);

  register = payload =>
    this.instance.post(AP.Dashboard.registerCustomer, payload);

  // actionTypes = payload =>
  //   this.instance.get(AP.basicInfo.actionTypes, {params: payload});

  // publicData = () => this.instance.get(AP.basicInfo.publicData);

  // enrolment = payload =>
  //   this.instance.get(AP.basicInfo.getEnrolment, {params: payload});

  // getUserConfig = () => this.instance.get(AP.basicInfo.userConfig);

  // postUserConfig = payload =>
  //   this.instance.put(AP.basicInfo.userConfig, payload);
  // ResetUserConfig = () => this.instance.delete(AP.basicInfo.userConfig);

  // dashboard = () => this.instance.get(AP.dashboard);

  // aboutVersion = () => this.instance.get(AP.about);
}

const HomeApi = new HomeApiClass();
export default HomeApi;
