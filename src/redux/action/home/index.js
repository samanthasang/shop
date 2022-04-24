import {ALL} from '../../constants/index';
export const getData = payload => {
  return {
    type: ALL.TEST,
    data: payload,
  };
};
export const getFirstFormData = payload => {
  return {
    type: ALL.FORMDATA.HOMEPAGE,
    data: payload,
  };
};
export const isLoginDis = value => {
  return {
    type: ALL.ACCOUNT.ISLOGIN,
    data: value,
  };
};
