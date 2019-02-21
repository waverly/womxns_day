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
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      console.log(window.location);
      const hash = window.location.hash;
      console.log({ hash });
      if (hash !== "") {
        const id = hash.substr(1);

        const elScrollHeight = document.querySelector(`[data-nameId="${id}"]`)
          .offsetTop;
        const halfHeight = window.innerHeight / 2.5;
        const newHeight = elScrollHeight - halfHeight;

        console.log(document.querySelectorAll(`.${id}`));
        document.querySelectorAll(`.${id}`).forEach(el => {
          console.log(el);
          el.classList.add("highlighted");
        });

        console.log({ elScrollHeight, newHeight, halfHeight });

        console.log(window.pageYOffset);

        if (elScrollHeight) {
          window.scrollTo(0, elScrollHeight);
          window.scrollTo({
            top: newHeight,
            left: 0,
            behavior: "smooth"
          });
        }
      } else {
        window &&
          typeof window === "object" &&
          window.scrollTo &&
          typeof window.scrollTo === "function" &&
          window.scrollTo(0, 0);
      }
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
