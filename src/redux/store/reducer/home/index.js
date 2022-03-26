import {updateObject} from '../../../../helper/index';
import {ALL} from '../../../constants';
const initialState = {
  test: false,
  formData: null,
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

const allData = (state = initialState, action) => {
  switch (action.type) {
    case ALL.TEST:
      return initialStateRedux(state, action);
    case ALL.FORMDATA.HOMEPAGE:
      return getFirstPageFormData(state, action);

    default:
      return state;
  }
};

export default allData;
