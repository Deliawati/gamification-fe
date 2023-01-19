import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wrapper, { persistor, store } from '../store';
import StoreInitialization from '../components/utils/StoreInitialization';
import { injectStore as injectStoreToApiService } from '../core/services/apiService';

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  injectStoreToApiService(store);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Head>
            <title>Gamification</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
          </Head>
          <ToastContainer />
          <Component {...pageProps} />
        </PersistGate>
      </SessionProvider>
      <StoreInitialization />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
