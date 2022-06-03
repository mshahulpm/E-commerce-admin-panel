import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { _TableHead } from "src/@types/common";
import { Button1 } from "src/components/Buttons";
import DataTable from "src/components/DataTable";
import Iconify from "src/components/Iconify";
import Label from "src/components/Label";
import { RowStyle } from "src/styles/global";


import USERLIST from 'src/_mocks_/user';
import { UserMoreMenu } from "../@dashboard/user";


export default function UserList() {

    const TABLE_HEAD: _TableHead[] = [
        { _key: 'name', label: 'Name', component: UserThumb },
        { _key: 'company', label: 'Company', },
        { _key: 'role', label: 'Role', },
        { _key: 'isVerified', label: 'Verified', component: UserVerified },
        { _key: 'status', label: 'Status', component: Status },
        { _key: 'action', label: '', component: UserMoreMenu }
    ]

    return (
        <>
            <DataTable
                tableHead={TABLE_HEAD}
                demoData={USERLIST}
            />
        </>
    )
}


const UserThumb = ({ data }: any) => {

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={data.name} src={data.avatarUrl} />
            <Typography variant="subtitle2" noWrap>
                {data.name}
            </Typography>
        </Stack>
    )
}

const Status = ({ data }: any) => {

    return <>
        <Label color={data.status === 'banned' ? 'error' : 'success'}>
            {data.status}
        </Label>
    </>
}


const UserVerified = ({ data }: any) => {
    return data?.isVerified ? <>Yes</> : <>No</>
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