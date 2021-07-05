import React, { FunctionComponent } from 'react'
import 'tailwindcss/tailwind.css'
import 'components/styles.css'
import { Page } from 'components/Layout'
import { NextSeo } from 'next-seo'
import { SITE_DESCRIPTION, SITE_NAME } from 'config'
import Head from 'next/head'
import SimpleReactLightbox from 'simple-react-lightbox'

const App: FunctionComponent<any> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Page>
      <NextSeo title={SITE_NAME} description={SITE_DESCRIPTION} />
      <SimpleReactLightbox>
      <Component {...pageProps} />
</SimpleReactLightbox>
    </Page>
  </>
)

export default App
