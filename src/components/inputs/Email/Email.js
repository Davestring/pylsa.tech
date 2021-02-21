import PropTypes from 'prop-types';
import React from 'react';

import Input from 'components/inputs/Input';

function Email({ helper, name, placeholder, size, styles, ...rest }) {
  return (
    <Input
      {...{
        ...rest,
        helper,
        label: 'email.label',
        name,
        placeholder,
        size,
        styles,
        type: 'email',
      }}
    ></Input>
  );
}

Email.defaultProps = {
  helper: '',
  name: '',
  placeholder: '',
  size: 'sm',
  styles: {},
};

Email.propTypes = {
  helper: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.shape({}),
};

export default Email;
