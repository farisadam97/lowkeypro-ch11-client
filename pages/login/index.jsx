import React from 'react';
import Container from '@mui/material/Container';
import FormLogin from '../../components/login/Login.component';
import Navbar from '../../components/navbar/Navbar.component';

export default function Login() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Login Page</h1>
        <Container maxWidth="lg">
          <FormLogin />
        </Container>
      </Container>
    </>
  );
}
