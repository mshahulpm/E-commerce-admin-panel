import { Card, Grid, Typography, useTheme } from "@mui/material";
import SummaryCard from "src/components/Cards/SummaryCard";
import { fCurrency } from "src/utils/formatNumber";




export default function MonthlySummary() {

    const theme = useTheme();

    return (
        <Card sx={{ p: 2, mb: 2 }}>
            <Typography sx={{ mb: 1 }} variant="h6">Monthly Performance</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <SummaryCard
                        title="Total Sales"
                        subtitle={fCurrency(1298)}
                        icon='healthicons:money-bag'
                        color={theme.palette.primary}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SummaryCard
                        title="Total Orders"
                        subtitle={fCurrency(1298)}
                        icon='eva:shopping-cart-fill'
                        color={theme.palette.secondary}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SummaryCard
                        title="Net Profit"
                        subtitle={fCurrency(1298)}
                        icon='fa6-solid:money-check-dollar'
                        color={theme.palette.info}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SummaryCard
                        title="New Users"
                        subtitle={fCurrency(1298)}
                        icon='eva:people-fill'
                        color={theme.palette.success}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}