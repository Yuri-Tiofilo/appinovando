import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import TextField from 'components/TextField';
import Button from 'components/Button';
import schema from './schema';
import Typography from 'components/Typography';

const LoginForm = ({ onSubmit = () => {}, navigation = {} }) => {
  const password = useRef(null);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              password.current.focus();
            }}
            returnKeyType="next"
            component={TextField}
          />
          <Field
            name="password"
            placeholder="Senha"
            secureTextEntry
            innerRef={password}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            component={TextField}
          />
          <Typography
            variant="link"
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{ alignSelf: 'flex-end', marginTop: -10 }}
          >
            Esqueci minha senha
          </Typography>
          <Button stretch loading={isSubmitting} onPress={handleSubmit}>
            Fazer Login
          </Button>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
