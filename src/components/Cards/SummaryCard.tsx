// material
import { alpha, styled } from '@mui/material/styles';
import { Card, ThemeOptions, Typography, PaletteColor } from '@mui/material';
// utils
//
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
        theme.palette.error.dark,
        0.24
    )} 100%)`
}));

// ----------------------------------------------------------------------


type props = {
    title: string;
    subtitle: string;
    icon: string;
    color: PaletteColor;
}

export default function SummaryCard({
    title,
    subtitle,
    icon,
    color,
}: props) {
    return (
        <RootStyle
            sx={{
                color: color?.darker!,
                backgroundColor: color?.lighter!
            }}
        >
            <IconWrapperStyle
                sx={{
                    color: color?.dark!,
                    backgroundImage: `linear-gradient(135deg, ${alpha(color?.dark, 0)} 0%, ${alpha(
                        color?.dark,
                        0.24
                    )} 100%)`
                }}
            >
                <Iconify icon={icon} width={24} height={24} />
            </IconWrapperStyle>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {subtitle}
            </Typography>
        </RootStyle>
    );
}
