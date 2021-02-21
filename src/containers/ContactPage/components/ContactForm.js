import * as Yup from 'yup';

import React from 'react';

import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';

import { useTranslation } from 'react-i18next';

import Email from 'components/inputs/Email';
import Input from 'components/inputs/Input';
import TextArea from 'components/inputs/TextArea';

import { isAlphaNumeric, isEmail, isName, isPhone } from 'utils/yup-extentions';

const ContactFormSchema = Yup.object().shape({
  name: isName('name', { required: true }),
  paternal: isName('paternal', { required: true }),
  maternal: isName('maternal', { required: false }),
  email: isEmail({ required: true }),
  phone: isPhone({ required: false }),
  text: isAlphaNumeric({ required: true }),
});

function ContactForm({ ...rest }) {
  const { t } = useTranslation('contact');

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
              label="name.label"
              name="name"
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
                label="paternal.label"
                name="paternal"
                size="sm"
                styles={{ bg: 'blue.50' }}
                {...{
                  mb: { base: 4, md: 0 },
                  mr: 4,
                }}
              ></Input>
              <Input
                label="maternal.label"
                name="maternal"
                placeholder="optional"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Input>
            </Flex>

            <Flex flexDir={{ base: 'column', md: 'row' }} mb={4}>
              <Email
                name="email"
                size="sm"
                styles={{ bg: 'blue.50' }}
                {...{
                  mb: { base: 4, md: 0 },
                  mr: 4,
                }}
              ></Email>
              <Input
                label="phone.label"
                name="phone"
                placeholder="optional"
                size="sm"
                styles={{ bg: 'blue.50' }}
              ></Input>
            </Flex>

            <TextArea
              name="text"
              placeholder="message.placeholder"
              styles={{ bg: 'blue.50' }}
              {...{ mb: 4 }}
            ></TextArea>

            <Flex justify="flex-end">
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
                  <Text>{t('send')}</Text>
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
