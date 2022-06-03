import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material'

export const RowStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    margin: theme.spacing(1.5, 0)
}));


export const LabelStyle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
}));
