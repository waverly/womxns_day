import React, { Component, Fragment } from "react";
import styled from "styled-components";

const ManifestoWrapper = styled.button`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  /* display: ${props => (props.display ? "block" : "none")}; */
  display: block;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  .module {
    width: 70%;
    height: 70%;
    color: white;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
  }

  h1 {
    color: ${props => props.theme.green};
  }
`;

export const Manifesto = props => (
  <ManifestoWrapper display={props.display}>
    <div className="module">
      <h1>
        <em>Today is International Woman's Day.</em>
      </h1>
      <p>
        Why is this day important? Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </ManifestoWrapper>
);
