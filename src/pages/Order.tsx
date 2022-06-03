// material
import { Container, Typography } from '@mui/material';
import OrderList from 'src/sections/order';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Order() {

    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Orders
                </Typography>

                <OrderList />

            </Container>
        </Page>
    );
}
