/**
 *
 * @format
 * @flow
 */

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const reduceSpace = str => {
  return str.replace(/^\s+|\s+$/gm, '');
};

export default {
  validateEmail,
  reduceSpace,
};
