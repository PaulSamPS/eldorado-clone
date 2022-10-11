import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import Layout from '../layout/Layout';
import Head from 'next/head';
import { AppContextProvider } from '../context/modalContext';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContextProvider>
          <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
              href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap'
              rel='stylesheet'
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
