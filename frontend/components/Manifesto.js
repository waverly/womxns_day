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

    p {
      color: black;
    }
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
            Today our website is dedicated to celebrating gender equality.
            <br /> <br />
            We want to historicize those who have supported this cause, as
            oftentimes these efforts go unseen and unacknowledged. By simply
            leaving a name of someone who exemplifies this, you are
            commemorating their efforts in this vital cause.
          </p>
        </div>
        <p className="click-to-enter">Click to start</p>
      </ManifestoWrapper>
    </a>
  </Link>
);

export default Manifesto;
