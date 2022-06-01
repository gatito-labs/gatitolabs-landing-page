import { FC, useEffect } from 'react';

import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

import '../styles/global.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MS25GPB' });
  }, []);
  return <Component {...pageProps} />;
};
export default MyApp;
