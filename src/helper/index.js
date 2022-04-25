export const handleSort = sorter => {
  let sort;

  if (sorter.order) {
    sort = {
      OrderBy: sorter.order === 'ascend' ? 'Asc' : 'Des',
      sortBy: sorter.columnKey ? sorter.columnKey : undefined,
    };
  } else {
    sort = {
      OrderBy: undefined,
      sortBy: undefined,
    };
  }

  return sort;
};

export const removeEmptyProperty = obj => {
  for (let propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName].length < 1
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const breadcrumbNameMap = {
  '/': 'Home',
  '/current/current-domestic': 'current flight / domestic',
  '/current/current-international': 'current flight / international',
  '/schedule/schedule-domestic': 'schedule flight / domestic',
  '/schedule/schedule-international': 'schedule flight / international',
  '/group': 'groups',
  '/user': 'users',
  '/device': 'devices',
  '/advertisement': 'advertisement',
  '/definitions': 'definitions',
  '/definitions/airline': 'airline',
  '/definitions/airport': 'airport',
  '/definitions/aircraft': 'aircraft',
  '/definitions/aircraftType': 'aircraftType',
  '/definitions/flightStatus': 'flight-status',
  '/definitions/resourceType': 'resource-and-service-type',
  '/definitions/resource': 'resource-and-service',
  '/setting': 'settings',
  '/log': 'log',
  '/report': 'reports',
};

export const flightTypeData = [
  {
    title: 'All',
    value: 'ALL',
  },
  {
    title: 'Arrivals',
    value: 'ARR',
  },
  {
    title: 'Departures',
    value: 'DEP',
  },
];

export const locationDetect = address => {
  const URL = window.location.pathname.split('/');
  return URL.includes(address);
};

const urlparams = payload => new URLSearchParams(payload);
export const makeUrlApi = (api, payload) => {
  if (payload.json) return `${api}?${payload}`;
  else return `${api}?${urlparams(payload)}`;
};
