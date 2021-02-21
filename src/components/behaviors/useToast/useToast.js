import React, { useCallback } from 'react';
import toaster from 'toasted-notes';

import { ThemeProvider, useTheme } from '@chakra-ui/react';

import Toast from './Toast';

function useToast() {
  const theme = useTheme();

  const notify = useCallback(
    ({
      position = 'bottom',
      duration = 5000,
      render,
      title,
      description,
      status,
      variant = 'solid',
      isClosable,
      onClose: handleOnClose,
    }) => {
      const options = {
        position,
        duration,
      };

      if (render) {
        return toaster.notify(
          ({ onClose, id }) => (
            <ThemeProvider theme={theme}>
              {render({
                onClose: () => {
                  onClose();
                  handleOnClose && handleOnClose();
                },
                id,
              })}
            </ThemeProvider>
          ),
          options,
        );
      }

      toaster.notify(
        ({ onClose, id }) => (
          <ThemeProvider theme={theme}>
            <Toast
              {...{
                onClose: () => {
                  onClose();
                  handleOnClose && handleOnClose();
                },
                id,
                description,
                isClosable,
                status,
                title,
                variant,
              }}
            />
          </ThemeProvider>
        ),
        options,
      );
    },
    [theme],
  );

  return notify;
}

export default useToast;
