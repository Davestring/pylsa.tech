import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Link, Stack } from '@chakra-ui/react';

function SocialMedia({ smItems, ...rest }) {
  return (
    <Stack isInline {...rest}>
      {smItems.map((item) => (
        <Link key={`social-media-${item.name}`} href={item.link} isExternal>
          <Icon as={item.icon} h={6} w={6}></Icon>
        </Link>
      ))}
    </Stack>
  );
}

SocialMedia.defaultProps = {
  smItems: [],
};

SocialMedia.propTypes = {
  smItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.elementType,
      link: PropTypes.string,
    }),
  ),
};

export default SocialMedia;
