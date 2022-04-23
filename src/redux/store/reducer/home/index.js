import {updateObject} from '../../../../helper/index';
import {ALL} from '../../../constants';
const initialState = {
  test: false,
  formData: null,
  isLogin: false,
};
const initialStateRedux = (state, action) => {
  return updateObject(state, {
    test: action.data,
  });
};
const getFirstPageFormData = (state, action) => {
  return updateObject(state, {
    formData: action.data,
  });
};
const isLoginRed = (state, action) => {
  return updateObject(state, {
    isLogin: action.data,
  });
};

const allData = (state = initialState, action) => {
  switch (action.type) {
    case ALL.TEST:
      return initialStateRedux(state, action);
    case ALL.FORMDATA.HOMEPAGE:
      return getFirstPageFormData(state, action);
    case ALL.ACCOUNT.ISLOGIN:
      return isLoginRed(state, action);

    default:
      return state;
  }
};

export default allData;
