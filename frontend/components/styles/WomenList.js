import styled from "styled-components";

export const WomenListWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  left: 5vw;
  top: 0vh;
  height: 90vh;
  -webkit-perspective: 200px;
  perspective: 200px;
  transition: 0.5s opacity;
  opacity: ${props => (props.formFocused ? ".1" : "1")};
  .hidden {
    overflow: hidden;
  }

  .womenWrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    padding-bottom: 5%;
    position: absolute;
    top: 0;
  }

  .womanItem {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    h1 {
      color: rgb(255, 255, 51);
      text-transform: uppercase;
      font-size: 6vw;
      font-weight: 900;
      text-align: center;
      width: 100%;
      max-width: max-content;
      display: block;
      margin-block-start: 10px;
      margin-block-end: 10px;
      height: auto;
      transition: 0.5s all;
      line-height: 0.8;
      margin-block-start: 2rem;
      margin-block-end: 2rem;
      text-align: justify;

      &:hover {
        color: black;
        -webkit-text-stroke: 2px rgb(255, 255, 51);
      }
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* outline: 2px solid red; */
  background: black;
  position: relative;

  &:first-of-type {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 80%;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(17, 17, 17, 0))
      );
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 1),
        rgba(17, 17, 17, 0)
      );
      background: -o-linear-gradient(
        top,
        rgba(0, 0, 0, 1),
        rgba(17, 17, 17, 0)
      );
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(17, 17, 17, 0)
      );
      z-index: 20;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }

  &:last-of-type {
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 80%;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(17, 17, 17, 0))
      );
      background: -webkit-linear-gradient(
        top,
        rgba(17, 17, 17, 0),
        rgba(0, 0, 0, 1)
      );
      background: -o-linear-gradient(
        top,
        rgba(17, 17, 17, 0),
        rgba(0, 0, 0, 1)
      );
      background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0),
        rgba(0, 0, 0, 1)
      );
      z-index: 20;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }
`;

export const InnerWrap = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: ${props =>
    props.order ? `calc((-100vh / 3) * ${props.order});` : "0"};
`;
