// material
import { Container, Typography, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// components
import Page from '../components/Page';
import UserList from 'src/sections/users';
import Iconify from 'src/components/Iconify';
import Header from 'src/components/Header';
//

// ----------------------------------------------------------------------

export default function User() {

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Header
          title='Users'
          btnText='New User'
        />
        <UserList />
      </Container>
    </Page>
  );
}
