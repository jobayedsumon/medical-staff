import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// mabe it's good to take slick css imports to component level
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../css/vendor/flaticon.css';
import '../css/vendor/fontawesome.min.css';
import '../css/vendor/themify-icons.css';
import '@/styles/globals.css';
import '@/styles/styles.scss';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta
          content="Medical Staff is a leading nursing agency in Australia for Nurses, Doctors and allied health."
          name="description"
          key="description"
        />
        <meta
          name="keywords"
          content="health,medicalstaff,medical,saff,jobs,looking for a job,local job search site,recruitment,nursing vacancy,doctors,nurses,Australia,Sydney,Brisbane,Melbourne"
          key="keywords"
        />
      </Head>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </Hydrate>
        </QueryClientProvider>
      </GoogleReCaptchaProvider>
    </>
  );
}
