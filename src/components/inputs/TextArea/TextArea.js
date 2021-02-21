import PropTypes from 'prop-types';
import React from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

function Input({
  helper,
  label,
  name,
  ns,
  placeholder,
  size,
  styles,
  ...rest
}) {
  const [field, meta] = useField(name);
  const { t } = useTranslation(ns);
  return (
    <FormControl name={name} isInvalid={meta.error && meta.touched} {...rest}>
      {label && <FormLabel fontSize={size}>{t(label)}</FormLabel>}
      <Textarea
        {...{
          ...field,
          ...styles,
          placeholder: placeholder && t(placeholder),
        }}
      ></Textarea>
      {helper && <FormHelperText>{helper}</FormHelperText>}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

Input.defaultProps = {
  helper: '',
  label: '',
  name: '',
  ns: '',
  placeholder: '',
  size: 'sm',
  styles: {},
};

Input.propTypes = {
  helper: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  ns: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.shape({}),
};

export default Input;
