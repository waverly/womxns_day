import React, { Component, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

const ManifestoWrapper = styled.button`
  width: 100vw;
  min-height: 100vh;
  background: ${props => props.theme.offWhite};
  display: block;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  border: unset;
  border-bottom: unset;

  .module {
    width: 70%;
    margin: 0 auto;
    color: black;
    text-align: left;
  }

  .click-to-enter {
    cursor: pointer;
    margin-top: 2rem;
    font-size: 3rem;
    transition: 0.5s all;
    text-transform: uppercase;
    &:hover {
      -webkit-text-stroke: 2px black;
      color: transparent;
    }
  }
`;

const Manifesto = () => (
  <Link href="/names">
    <a>
      <ManifestoWrapper>
        <div className="module">
          <p>
            Why is this day important? Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <p className="click-to-enter">Click to start</p>
      </ManifestoWrapper>
    </a>
  </Link>
);

export default Manifesto;
