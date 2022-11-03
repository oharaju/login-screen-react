import React from 'react';
import { Title, Container, DivImg, ImgLogin } from './styles';
import {
  Div,
  Input,
  Label,
  LabelCheckbox,
  DivRememberPassword,
} from '../Input';
import Button from '../Button';

const Login = () => (
  <Container>
    <div>
      <ImgLogin />
    </div>

    <Title>Hello! Friend!</Title>
    <Div>
      <Label>Username *</Label>
      <Input type="text" placeholder="Enter your Username" />
    </Div>
    <Div>
      <Label>Password *</Label>
      <Input type="password" placeholder="Enter your Password" />
    </Div>
    <DivRememberPassword>
      <input type="checkbox" />
      <LabelCheckbox>Remember me</LabelCheckbox>
    </DivRememberPassword>
    <Div>
      <Button>Login</Button>
    </Div>
  </Container>
);

export default Login;
