import { Box, Button, Typography } from "@mui/material";
import { _TableHead } from "src/@types/common";
import { Button1 } from "src/components/Buttons";
import DataTable from "src/components/DataTable";
import Iconify from "src/components/Iconify";
import Label from "src/components/Label";
import { RowStyle } from "src/styles/global";
import PRODUCTS from "src/_mocks_/products";




export default function CategoryList() {

    const TABLE_HEAD: _TableHead[] = [
        { _key: "name", label: 'Name', component: CategoryThumb },
        { _key: "action", label: 'Action', component: ProductAction },
    ]

    return (
        <>
            <DataTable
                tableHead={TABLE_HEAD}
                demoData={PRODUCTS}
            />
        </>
    )
}



const CategoryThumb = ({ data }: any) => {

    return (
        <RowStyle>
            <Box
                component="img"
                alt={''}
                src={data.cover}
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
        categories.map((category: any) => (
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
                    mr: 1
                }}
            >
                <Iconify icon="eva:edit-fill" />
            </Button1>

            <Button1
                // variant="contained"
                sx={{
                    fontSize: '20px',
                }}
                color="error"
            >
                <Iconify icon="fluent:delete-16-filled" />
            </Button1>

        </RowStyle>
    )

}