// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Marketing() {

    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Marketing
                </Typography>
            </Container>
        </Page>
    );
}
