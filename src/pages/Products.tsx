// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import ProductList from 'src/sections/product';
//

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <ProductList />
      </Container>
    </Page>
  );
}
