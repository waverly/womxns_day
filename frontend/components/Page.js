import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  green: "#00ff00",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik+Mono+One');


  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    overflow: auto;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Rubik Mono One', sans-serif;
    background: darkgrey;
    height: 10000px;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  .highlighted {
    h1{
      color: hotpink !important;
    }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {/* <Header /> */}
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
