import React from 'react';

import Button from '../../../styles/components/button';
import { Container, SignForm } from '../styles';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas vindas</h1>

      <span>E-MAIL</span>
      <input type="text" name="email" />

      <span>SENHA</span>
      <input type="password" name="password" />

      <Button size="big" type="submit">
        Entrar
      </Button>
    </SignForm>
  </Container>
);

export default SignIn;
