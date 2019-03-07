require("es6-promise").polyfill();
require("isomorphic-fetch");

import App, { Container } from "next/app";
import Page from "../components/Page";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
      </Container>
    );
  }
}
