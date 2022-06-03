import {
    Card,
    TableContainer,
    Typography,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Button
} from "@mui/material";
import Label from "src/components/Label";
import { RowStyle } from "src/styles/global";



export default function RecentOrders() {

    return (
        <Card sx={{ p: 2, mt: 2 }}>
            <RowStyle>
                <Typography sx={{ mr: 'auto' }} variant="h5">Recent Orders</Typography>
                <Button>View More</Button>
            </RowStyle>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>
                                        <Label color={order.status === 'Pending' ? 'error' : 'success'}>
                                            {order.status}
                                        </Label>
                                    </TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>{order.createdAt}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}


const orders = [
    { id: 1, customer: 'John Doe', status: 'Pending', total: '$12.00', createdAt: '12/12/2019' },
    { id: 2, customer: 'John Doe', status: 'Shipped', total: '$12.00', createdAt: '12/12/2019' },
    { id: 3, customer: 'John Doe', status: 'Delivered', total: '$12.00', createdAt: '12/12/2019' },
    { id: 4, customer: 'John Doe', status: 'Cancelled', total: '$12.00', createdAt: '12/12/2019' },
    { id: 5, customer: 'John Doe', status: 'Returned', total: '$12.00', createdAt: '12/12/2019' },
]