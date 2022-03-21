import {ALL} from '../../constants/index';
export const getData = payload => {
  return {
    type: ALL.TEST,
    data: payload,
  };
};
