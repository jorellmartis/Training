import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutMain from '../components/Layout/LayoutMain'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page )
  return  (
  <>
  <Provider store={store}>
  <LayoutMain>
  {getLayout(<Component {...pageProps} />)}
  </LayoutMain>
  </Provider>
  </>
  )
}
