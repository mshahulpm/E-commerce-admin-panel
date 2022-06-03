// material
import { Container, Typography } from '@mui/material';
import AssetList from 'src/sections/assets';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Assets() {

    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <AssetList />
            </Container>
        </Page>
    );
}
