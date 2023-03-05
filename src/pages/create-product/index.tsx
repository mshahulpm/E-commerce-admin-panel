import { Container, Typography } from "@mui/material";
import Page from "src/components/Page";
import { AssetProvider } from "src/sections/assets/AssetContext";
import ProductForm from "./ProductForm";




export default function CreateProduct() {

    return (
        <Page title="Dashboard: Create Products | Minimal-UI">
            <Container>
                <Typography variant='h6'>Create New Product</Typography>
                <ProductForm />
            </Container>
        </Page>
    )
}