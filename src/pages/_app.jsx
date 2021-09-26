import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../styles/global';

import Layout from '../components/MainLayout';

import Drawer from '../components/Drawer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Header />
        <Drawer />
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType
};

export default MyApp;
