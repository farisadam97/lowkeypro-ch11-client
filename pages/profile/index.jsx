import React from 'react';
import Container from '@mui/material/Container';
import FormProfile from '../../components/profile/Profile.component';
import Navbar from '../../components/navbar/Navbar.component';

export default function Login() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Lowkeys Profile</h1>
        <Container maxWidth="lg">
          <FormProfile />
        </Container>
      </Container>
    </>
  );
}
