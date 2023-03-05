import Router from './routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { AuthProvider } from 'src/context/AuthContext';
import { ApolloProvider } from '@apollo/client';
import client from './services/api';
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> */}
          <ToastContainer />
          <Router />
        </ThemeConfig>
      </AuthProvider>
    </ApolloProvider>
  );
}
