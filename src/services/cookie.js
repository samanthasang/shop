export const setCookie = (name, value, expire) => {
  const domain = window.location.hostname;
  const localDate = new Date(expire);
  const expireTime = localDate.toUTCString();
  const expires = `; expires=${expireTime}`;
  document.cookie =
    name +
    '=' +
    (value || '') +
    expires +
    '; path=/;' +
    'domain=' +
    '' +
    domain +
    ';';
};

export const getCookie = name => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const removeCookie = (
  name = 'aims-token',
  path = '/',
  domain = window.location.hostname,
) => {
  if (getCookie('aims-token')) {
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};
