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

const home = (state = initialState, action) => {
  switch (action.type) {
    case ALL.TEST:
      return initialStateRedux(state, action);

    default:
      return state;
  }
};

export default home;
