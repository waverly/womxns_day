import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
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
    // if ("scrollRestoration" in history) {
    //   history.scrollRestoration = "manual";
    // }

    console.log("yo");
    console.log("should be setting scroll to 00");
    console.log(window.pageYOffset);
    window &&
      typeof window === "object" &&
      window.scrollTo &&
      typeof window.scrollTo === "function" &&
      window.scrollTo(0, 0);

    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      //   window.scrollTo(0, 0);
      console.log(window.pageYOffset);
      console.log(window.location);
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
