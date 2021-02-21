import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'redux-injectors';

import makeSelectToastManager from './selectors';
import useToast from 'components/behaviors/useToast';

import { reducer, removeToast } from './slice';

import _ from 'lodash';

const stateSelector = createStructuredSelector({
  toasts: makeSelectToastManager(),
});

function ToastManager() {
  useInjectReducer({ key: 'toasts', reducer });

  const { toasts } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const toast = useToast();

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeToast(id));
    },
    [dispatch],
  );

  useEffect(() => {
    if (_.isEmpty(toasts)) return;
    _.each(toasts, ({ id, duration = 5000, ...props }) => {
      toast({
        ...props,
        position: 'top-right',
        duration,
        isClosable: true,
        onClose: () => handleRemove(id),
      });
      duration && handleRemove(id);
    });
  }, [toasts]);

  return null;
}

ToastManager.defaultProps = {};

ToastManager.propTypes = {};

export default ToastManager;
