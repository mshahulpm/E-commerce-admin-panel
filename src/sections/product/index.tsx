import { useLazyQuery } from "@apollo/client";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { _TableHead } from "src/@types/common";
import { Button1 } from "src/components/Buttons";
import DataTable, { DataTableProps } from "src/components/DataTable";
import Iconify from "src/components/Iconify";
import Label from "src/components/Label";
import { config } from "src/constants";
import { GET_ALL_PRODUCTS } from "src/graphql/query";
import { RowStyle } from "src/styles/global";
import PRODUCTS from "src/_mocks_/products";




export default function ProductList() {

    const TABLE_HEAD: _TableHead[] = [
        { _key: "name", label: 'Name', component: ProductThumb },
        { _key: "price", label: 'Price' },
        { _key: "stock", label: 'Stock' },
        { _key: "category", label: 'Category', component: Category },
        { _key: "action", label: 'Action', component: ProductAction },
    ]

    const [getProductsQuery] = useLazyQuery(GET_ALL_PRODUCTS, {})

    // @ts-ignore
    const getProducts: DataTableProps['dataSource'] = async ({ search, limit, page, filter }) => {
        const { data } = await getProductsQuery({
            variables: {
                pagination: {
                    limit,
                    page,
                    search
                }
            }
        })
        return data.getAllProducts
    }


    return (
        <>
            <RowStyle sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Products
                </Typography>
                <Box>
                    <Link to='/dashboard/products/create'>
                        <Button variant='outlined'>+ Add</Button>
                    </Link>
                </Box>
            </RowStyle>
            <DataTable
                tableHead={TABLE_HEAD}
                dataSource={getProducts}
            />
        </>
    )
}



const ProductThumb = ({ data }: any) => {

    return (
        <RowStyle>
            <Box
                component="img"
                alt={''}
                src={config.FILE_SERVER + data.thumbnail}
                sx={{ height: 48, width: 48, borderRadius: 1.5 }}
            />
            <Typography variant="body2" sx={{ ml: 2 }}>
                {data.name}
            </Typography>
        </RowStyle>
    )
}


const Category = ({ data }: any) => {

    const { categories } = data;

    return <> {
        categories?.map((category: any) => (
            <Label sx={{ mr: 1 }} color="secondary" key={category}>{category}</Label>
        ))
    } </>
}


const ProductAction = ({ data }: any) => {

    return (
        <RowStyle>
            <Button1
                variant="contained"
                sx={{
                    fontSize: '20px',
                }}
            >
                <Iconify icon="eva:edit-fill" />
            </Button1>

        </RowStyle>
    )

}