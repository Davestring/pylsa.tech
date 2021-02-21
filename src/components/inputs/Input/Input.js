import PropTypes from 'prop-types';
import React from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as InputField,
} from '@chakra-ui/react';

import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

function Input({
  helper,
  label,
  name,
  placeholder,
  size,
  styles,
  type,
  ...rest
}) {
  const [field, meta] = useField(name);
  const { t } = useTranslation('forms');
  return (
    <FormControl name={name} isInvalid={meta.error && meta.touched} {...rest}>
      {label && <FormLabel fontSize={size}>{t(label)}</FormLabel>}
      <InputField
        {...{
          ...field,
          ...styles,
          placeholder: placeholder && t(placeholder),
          size,
          type,
        }}
      ></InputField>
      {helper && <FormHelperText>{helper}</FormHelperText>}
      <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
    </FormControl>
  );
}

Input.defaultProps = {
  helper: '',
  label: '',
  name: '',
  placeholder: '',
  size: 'sm',
  styles: {},
  type: 'text',
};

Input.propTypes = {
  helper: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.shape({}),
  type: PropTypes.string,
};

export default Input;
