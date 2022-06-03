import { Box, Button, Typography } from "@mui/material";
import { _TableHead } from "src/@types/common";
import { Button1 } from "src/components/Buttons";
import DataTable from "src/components/DataTable";
import Iconify from "src/components/Iconify";
import Label from "src/components/Label";
import { RowStyle } from "src/styles/global";




export default function OrderList() {

    const TABLE_HEAD: _TableHead[] = [
        { _key: "id", label: 'Order No', },
        { _key: "customer", label: 'Customer' },
        { _key: "status", label: 'Status', component: OrderStatus },
        { _key: "total", label: 'Order Total', },
        { _key: "createdAt", label: 'Created At', },
        { _key: "action", label: 'Action', component: Action },
    ]

    return (
        <>
            <DataTable
                tableHead={TABLE_HEAD}
                demoData={orders}
            />
        </>
    )
}


const OrderStatus = ({ data }: any) => {

    return <>
        <Label color={data.status === 'Pending' ? 'error' : 'success'}>
            {data.status}
        </Label>
    </>
}


const Action = ({ data }: any) => {

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



const orders = [
    { id: 1, customer: 'John Doe', status: 'Pending', total: '$12.00', createdAt: '12/12/2019' },
    { id: 2, customer: 'John Doe', status: 'Shipped', total: '$12.00', createdAt: '12/12/2019' },
    { id: 3, customer: 'John Doe', status: 'Delivered', total: '$12.00', createdAt: '12/12/2019' },
    { id: 4, customer: 'John Doe', status: 'Cancelled', total: '$12.00', createdAt: '12/12/2019' },
    { id: 5, customer: 'John Doe', status: 'Returned', total: '$12.00', createdAt: '12/12/2019' },
]