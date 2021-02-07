import PropTypes from 'prop-types';
import React from 'react';

import styled from '@emotion/styled';

import { Box, Icon, Link, Stack } from '@chakra-ui/react';

const IconWrapper = styled(Box)`
  border-color: ${({ theme }) => theme.colors.base};
  border-radius: ${({ theme }) => theme.radii.full};
  border-width: 2px;
  padding: ${({ theme }) => theme.space[2]};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function SocialMedia({ smItems, iconProps, ...rest }) {
  return (
    <Stack isInline {...rest}>
      {smItems.map((item) => (
        <Link key={`social-media-${item.name}`} href={item.link} isExternal>
          <IconWrapper>
            <Icon as={item.icon} {...iconProps}></Icon>
          </IconWrapper>
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
