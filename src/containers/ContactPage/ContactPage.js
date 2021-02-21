import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';

import { GrMail, GrMapLocation } from 'react-icons/gr';
import { FaPhoneSquare } from 'react-icons/fa';

import Container from 'components/elements/Container';

import ContactForm from './components/ContactForm';

function ContactPage() {
  const { t } = useTranslation('contact');
  return (
    <>
      <Helmet>
        <title>{t('html.title')}</title>
        <meta name="description" content={t('html.meta')} />
      </Helmet>
      <Box as="article" my={12}>
        <Container
          as="section"
          bg="base"
          mb={12}
          py={12}
          textAlign="center"
          isFluid
        >
          <Heading as="h1" color="white" textTransform="uppercase">
            {t('title')}
          </Heading>
        </Container>
        <Container as="section">
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <ContactForm
              width={{ base: '100%', md: '50%', lg: '66%' }}
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 8 }}
            ></ContactForm>
            <Box width={{ base: '100%', md: '50%', lg: '33%' }}>
              <Text as="strong">Otras formas de contactarnos</Text>
              <Text fontSize="xs" mb={4}>
                Si no deseas utilizar el formulario de contacto o necesitas
                enviar algo a PYLSA, puedes contactarnos de las siguentes
                maneras.
              </Text>
              <Box bg="gray.50" fontSize="sm" p={4}>
                <Stack isInline align="center" spacing={4}>
                  <Icon as={GrMail} h={6} w={6}></Icon>
                  <Text>contacto@pylsa.tech</Text>
                </Stack>
                <Divider my={4}></Divider>
                <Stack isInline align="center" spacing={4}>
                  <Icon as={FaPhoneSquare} h={6} w={6}></Icon>
                  <Box>
                    <Text>55-82-88-31-12</Text>
                    <Text>55-82-88-31-29</Text>
                  </Box>
                </Stack>
                <Divider my={4}></Divider>
                <Stack isInline align="center" spacing={4}>
                  <Icon as={GrMapLocation} h={6} w={6}></Icon>
                  <Text>
                    Aerolito #7 Chicoloapan de Juárez, Estado de México
                  </Text>
                </Stack>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default ContactPage;
