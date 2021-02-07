import PropTypes from 'prop-types';
import React from 'react';

import { Box, Icon, Link, Stack } from '@chakra-ui/react';

function SocialMedia({ smItems, iconProps, ...rest }) {
  return (
    <Stack isInline {...rest}>
      {smItems.map((item) => (
        <Link key={`social-media-${item.name}`} href={item.link} isExternal>
          <Box border="2px" borderColor="base" p={2} rounded="full">
            <Icon as={item.icon} {...iconProps}></Icon>
          </Box>
        </Link>
      ))}
    </Stack>
  );
}

SocialMedia.defaultProps = {
  iconProps: { height: 6, width: 6 },
  smItems: [],
};

SocialMedia.propTypes = {
  iconProps: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  smItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.elementType,
      link: PropTypes.string,
    }),
  ),
};

export default SocialMedia;
