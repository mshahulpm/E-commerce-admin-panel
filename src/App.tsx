import Router from './routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { AuthProvider } from 'src/context/AuthContext';
import { ApolloProvider } from '@apollo/client';
import client from './services/api';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Router />
        </ThemeConfig>
      </AuthProvider>
    </ApolloProvider>
  );
}
