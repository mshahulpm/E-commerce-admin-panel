// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import CategoryList from 'src/sections/category';
//

// ----------------------------------------------------------------------

export default function Category() {

    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Categories
                </Typography>
                <CategoryList />
            </Container>
        </Page>
    );
}
