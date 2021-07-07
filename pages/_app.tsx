import React, { FunctionComponent, useState, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import 'components/styles.css'
import { Page } from 'components/Layout'
import { NextSeo } from 'next-seo'
import { SITE_DESCRIPTION, SITE_NAME } from 'config'
import Head from 'next/head'
import SimpleReactLightbox from 'simple-react-lightbox'
import useTheme from 'hooks/useTheme'

const THEME = {
  dark: {
    bg: '#201d2b'
  },
  light: {
    bg: '#f1f1f1'
  }
}

const App: FunctionComponent<any> = ({ Component, pageProps }) => {
  const [theme] = useTheme()
  const [titleBarColor, setTitleBarColor] = useState(THEME.dark.bg)

  useEffect(() => {
    if (theme === 'dark') {
      setTitleBarColor(THEME.dark.bg)
    } else {
      setTitleBarColor(THEME.light.bg)
    }
  }, [theme])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content={titleBarColor} />
      </Head>
      <Page>
        <NextSeo title={SITE_NAME} description={SITE_DESCRIPTION} />
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </Page>
    </>
  )
}

export default App
