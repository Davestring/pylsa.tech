import PropTypes from 'prop-types';
import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
} from '@chakra-ui/react';

function Toast({
  description,
  id,
  isClosable,
  onClose,
  status,
  title,
  variant,
  ...rest
}) {
  return (
    <Alert
      {...{
        id,
        status,
        variant,
        alignItems: 'start',
        boxShadow: 'lg',
        margin: 2,
        paddingRight: 8,
        rounded: 'md',
        textAlign: 'left',
        ...rest,
      }}
    >
      <AlertIcon />
      <Box flex="1">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Box>
      {isClosable && (
        <CloseButton
          onClick={onClose}
          position="absolute"
          right="4px"
          size="sm"
          top="4px"
        />
      )}
    </Alert>
  );
}

Toast.defaultProps = {
  description: '',
  id: 0,
  isClosable: true,
  onClose: () => {},
  status: '',
  title: '',
  variant: 'success',
};

Toast.propTypes = {
  description: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
  status: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default Toast;
