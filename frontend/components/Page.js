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
  darkerOffWhite: "#F7F0E5",
  offWhite: "#FFF7EC",
  teal: "#53B8C5",
  pink: "#E5918A",
  gold: "#FFC702",
  maroon: "#A70028",
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
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    overflow: auto;
    background: #FFF7EC;
    background: white;
  }

  .display-none{
    /* display: none!important; */
    opacity: 0;
    visibility: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Khand', sans-serif;
    background: transparent;
  }
  p{
    font-family: 'Khand', sans-serif;
    font-size: 4vw;
    line-height: 1;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
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
