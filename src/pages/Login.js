import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useAuth } from 'contexts/auth';
import LoginForm from 'forms/LoginForm';
import FormView from 'styles/FormView';
import {
  CardFormLogin,
  ImageContainer,
  Title,
  SubTitle,
} from 'styles/Login/style';

const Login = ({ navigation }) => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignIn(values) {
    if (loading) return;

    setLoading(true);
    try {
      await signIn(values);
    } catch {
      setLoading(false);
    }
  }

  return (
    <FormView>
      <ImageContainer
        style={{
          marginBottom: 20,
          padding: 20,
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Image
          source={require('images/logo.png')}
          style={{ width: 150, height: 120 }}
          resizeMode="contain"
        />
      </ImageContainer>
      <CardFormLogin>
        <Title>Olá! Seja bem vindo</Title>
        <SubTitle>Insira sua senha para efetuar o login</SubTitle>
        <LoginForm navigation={navigation} onSubmit={handleSignIn} />
      </CardFormLogin>
    </FormView>
  );
};

export default Login;
