// import {USER} from 'redux/constants';
// import {updateObject} from 'helper/utils/helpers';

// const initialState = {
//   loading: false,
//   allFilterLogs: null,
//   public: null,
//   userConfigs: null,
// };

// const getAllFilterLogs = state => {
//   return updateObject(state, {
//     loading: true,
//   });
// };

// const getAllFilterLogsSuccess = (state, action) => {
//   return updateObject(state, {
//     loading: false,
//     allFilterLogs: action.data,
//   });
// };

// const getAllFilterLogsFailed = state => {
//   return updateObject(state, {
//     loading: false,
//   });
// };

// const getPublic = state => {
//   return updateObject(state, {
//     loading: true,
//   });
// };

// const getPublicSuccess = (state, action) => {
//   return updateObject(state, {
//     loading: false,
//     public: action.data,
//   });
// };

// const getPublicFail = state => {
//   return updateObject(state, {
//     loading: true,
//   });
// };

// const getUserConfig = (state, action) => {
//   return updateObject(state, {
//     userConfigs: action.data,
//   });
// };

// const basics = (state = initialState, action) => {
//   switch (action.type) {
//     case USER.BASICS.GET_FILTER_LOGS:
//       return getAllFilterLogs(state);
//     case USER.BASICS.GET_FILTER_LOGS_SUCCESS:
//       return getAllFilterLogsSuccess(state, action);
//     case USER.BASICS.GET_FILTER_LOGS_FAILED:
//       return getAllFilterLogsFailed(state);

//     case USER.BASICS.GET_PUBLIC:
//       return getPublic(state);
//     case USER.BASICS.GET_PUBLIC_SUCCESS:
//       return getPublicSuccess(state, action);
//     case USER.BASICS.GET_PUBLIC_FAIL:
//       return getPublicFail(state);

//     case USER.BASICS.GET_USER_CONFIG:
//       return getUserConfig(state, action);

//     default:
//       return state;
//   }
// };

// export default basics;
