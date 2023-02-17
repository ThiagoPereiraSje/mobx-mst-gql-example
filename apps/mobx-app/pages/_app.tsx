import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { createHttpClient } from "mst-gql"
import { RootStore, StoreContext } from "../models"

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("http://localhost:8055/graphql", {
    headers: {
      "Authorization": "Bearer sfu54tQE-KnmFJLHccius4Y-uphJX33_"
    }
  })
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mobx-app!</title>
      </Head>
      <StoreContext.Provider value={rootStore}>  
        <main className="app">
          <Component {...pageProps} />
        </main>
      </StoreContext.Provider>
    </>
  );
}

export default CustomApp;
