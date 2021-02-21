import PropTypes from 'prop-types';
import React from 'react';

import Input from 'components/inputs/Input';

function Email({ helper, name, ns, placeholder, size, styles, ...rest }) {
  return (
    <Input
      {...{
        ...rest,
        helper,
        label: 'fields.email.label',
        name,
        ns,
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
  ns: '',
  placeholder: '',
  size: 'sm',
  styles: {},
};

Email.propTypes = {
  helper: PropTypes.string,
  name: PropTypes.string,
  ns: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.shape({}),
};

export default Email;
