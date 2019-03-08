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

  .tiny {
    margin-top: 3rem;
    font-size: 12px;
    @media screen and (max-width: 768px) {
      font-size: 6vw;
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

  .desktop {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .module {
      width: 90%;

      p {
        font-size: 10vw;
      }
    }
  }
`;

class Manifesto extends Component {
  componentDidMount() {
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      const h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      document.body.style.height = h + "px";
    }
  }
  render() {
    return (
      <Link href="/names">
        <a>
          <ManifestoWrapper>
            <div className="module">
              <p>
                In honor of International Women's Day, we are celebrating the
                pursuit of gender equality.
                <br />
                <br />
                Join us in this mission by adding a name of someone who has
                helped further this cause, whether it’s your high school science
                teacher or Gloria Steinem - every positive effort counts.
              </p>
            </div>
            <p className="click-to-enter desktop">Click to start</p>
            <p className="click-to-enter mobile">Tap to start</p>
            <p className="tiny">made with &hearts; by north kingdom</p>
          </ManifestoWrapper>
        </a>
      </Link>
    );
  }
}

export default Manifesto;
