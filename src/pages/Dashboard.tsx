// material
import { Box, Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import {
  AppTasks,
  BestSellers,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  MonthlySummary,
  RecentOrders
} from '../sections/dashboard';

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 2 }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        <MonthlySummary />
        <Grid container spacing={3}>
          {/* ---------------------------------- */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <BestSellers />
          </Grid>
          {/* ------------------------- */}
        </Grid>
        <RecentOrders />
      </Container>
    </Page>
  );
}
