import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Iconify from 'src/components/Iconify'



type props = {
    title: string
    btnText: string
    btnFn?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    href?: string
}


export default function Header({
    title,
    btnText,
    btnFn = (e: any) => { },
    href = '#'
}: props) {

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Button
                variant="contained"
                component={Link}
                to={href}
                startIcon={<Iconify icon="eva:plus-fill" />}
                onClick={btnFn}
            >
                {btnText}
            </Button>
        </Stack>
    )
}