import React from 'react';

import { Box, Divider, Icon, Link, Stack, Text } from '@chakra-ui/react';

import { FaPhoneSquare } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';

import { useTranslation } from 'react-i18next';

function OtherContact({ ...rest }) {
  const { t } = useTranslation('contact');
  return (
    <Box {...rest}>
      <Text as="strong" textTransform="uppercase">
        {t('other.title')}
      </Text>
      <Text fontSize="xs" mb={4}>
        {t('other.description')}
      </Text>
      <Box bg="gray.50" fontSize="sm" p={4}>
        <Stack isInline align="center" spacing={4}>
          <Icon as={GrMail} h={6} w={6}></Icon>
          <Link href="mailto:contacto@pylsa.tech" isExternal>
            <Text as="strong" color="blue.500">
              {t('other.email')}
            </Text>
          </Link>
        </Stack>
        <Divider my={4}></Divider>
        <Stack isInline align="center" spacing={4}>
          <Icon as={FaPhoneSquare} h={6} w={6}></Icon>
          <Box>
            <Text>{t('other.phoneOne')}</Text>
            <Text>{t('other.phoneTwo')}</Text>
          </Box>
        </Stack>
        <Divider my={4}></Divider>
        <Stack isInline align="center" spacing={4}>
          <Icon as={HiLocationMarker} h={6} w={6}></Icon>
          <Text>{t('other.address')}</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default OtherContact;
