import * as Yup from 'yup';

export const NAMES_REGEX = /^[a-z ,.'-]{3,}$/i;

export const PHONE_REGEX = /^[0-9]{10}?$/;

export function isName(name, { required }) {
  if (required) {
    return Yup.string()
      .matches(NAMES_REGEX, `${name}.error`)
      .required('required');
  }
  return Yup.string().matches(NAMES_REGEX, `${name}.error`);
}

export function isEmail({ required }) {
  if (required) {
    return Yup.string().email('email.error').required('required');
  }
  return Yup.string().email('email.error');
}

export function isPhone({ required }) {
  if (required) {
    return Yup.string()
      .matches(PHONE_REGEX, 'phone.error')
      .required('required');
  }
  return Yup.string().matches(PHONE_REGEX, 'phone.error');
}

export function isAlphaNumeric({ required }) {
  if (required) {
    return Yup.string().required('required');
  }
  return Yup.string();
}
