import * as Yup from 'yup';

import React from 'react';

import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';

import { useTranslation } from 'react-i18next';

import Email from 'components/inputs/Email';
import Input from 'components/inputs/Input';
import TextArea from 'components/inputs/TextArea';

import { NAMES_REGEX, PHONE_REGEX } from 'utils/yup-extentions';

function ContactForm({ ...rest }) {
  const { t } = useTranslation('contact');

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(NAMES_REGEX, t('fields.name.error'))
      .required(t('fields.required')),
    paternal: Yup.string()
      .matches(NAMES_REGEX, t('fields.paternal.error'))
      .required(t('fields.required')),
    maternal: Yup.string().matches(NAMES_REGEX, t('fields.maternal.error')),
    email: Yup.string()
      .email(t('fields.email.error'))
      .required(t('fields.required')),
    phone: Yup.string().matches(PHONE_REGEX, t('fields.phone.error')),
    text: Yup.string().required(t('fields.required')),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        paternal: '',
        maternal: '',
        email: '',
        phone: '',
        text: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Box {...rest}>
          <Form>
            <Input
              label="fields.name.label"
              name="name"
              ns="contact"
              size="sm"
              styles={{ bg: 'blue.50' }}
              {...{
                mb: 4,
                pr: { base: 0, md: 2 },
                w: { base: '100%', md: '50%' },
              }}
            ></Input>
            <Flex flexDir={{ base: 'column', md: 'row' }} mb={4}>
              <Input
                label="fields.paternal.label"
                mr={4}
                name="paternal"
                ns="contact"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Input>
              <Input
                label="fields.maternal.label"
                name="maternal"
                ns="contact"
                placeholder="fields.optional"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Input>
            </Flex>
            <Flex flexDir={{ base: 'column', md: 'row' }} mb={4}>
              <Email
                mr={4}
                name="email"
                ns="contact"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Email>
              <Input
                label="fields.phone.label"
                name="phone"
                ns="contact"
                placeholder="fields.optional"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Input>
            </Flex>

            <TextArea
              name="text"
              ns="contact"
              mb={4}
              placeholder="fields.message.placeholder"
              styles={{ bg: 'blue.50' }}
            ></TextArea>

            <Flex justify="flex-end" pl={{ base: 0, md: 4 }}>
              <Button
                colorScheme="facebook"
                isDisabled={!isValid}
                isLoading={isSubmitting}
                size="sm"
                type="submit"
                variant="solid"
                w={{ base: '100%', md: '50%', lg: '33%' }}
              >
                <Stack isInline align="center" px={4}>
                  <Text>{t('fields.send')}</Text>
                  <Icon as={HiOutlineMail} h={5} w={5}></Icon>
                </Stack>
              </Button>
            </Flex>
          </Form>
        </Box>
      )}
    </Formik>
  );
}

export default ContactForm;
