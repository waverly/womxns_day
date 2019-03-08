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

  @media screen and (max-width: 768px) {
    margin-top: -25vh;
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
    width: 100%;
  }

  .womanItem {
    /* width: 100%; */
    background: transparent;
    display: flex;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    .inner-relative {
      position: relative;
      display: inline-block !important;
      cursor: pointer;
    }

    .super-cta {
      position: absolute;
      right: 0;
      top: -5vw;
      font-size: 3vw;
      text-transform: uppercase;
      color: black;
      -webkit-text-stroke: 2px black;
      color: ${props => props.theme.darkerOffWhite};
      display: none;
      width: max-content;

      @media screen and (max-width: 768px) {
        font-size: 5vw;
        top: -7vw;
        -webkit-text-stroke: 1px black;
      }
    }

    &.highlighted {
      .super-cta {
        display: block;
      }
    }

    &:nth-child(3n + 1) {
      justify-content: flex-start;
      .super-cta {
        right: unset;
        left: 0;
      }
    }
    &:nth-child(3n + 2) {
      justify-content: center;
      text-align: center;
    }
    &:nth-child(3n + 3) {
      justify-content: flex-end;
      text-align: right;
    }

    &:nth-child(4n + 1) {
      h1 {
        color: ${props => props.theme.teal};
        -webkit-text-stroke: 2px ${props => props.theme.teal};
      }
      &.highlighted {
        h1 {
          color: transparent;
          -webkit-text-stroke: 2px ${props => props.theme.teal};
        }
      }
    }
    &:nth-child(4n + 2) {
      h1 {
        color: ${props => props.theme.pink};
        -webkit-text-stroke: 2px ${props => props.theme.pink};
      }
      &.highlighted {
        h1 {
          color: transparent;
          -webkit-text-stroke: 2px ${props => props.theme.pink};
        }
      }
    }
    &:nth-child(4n + 3) {
      h1 {
        color: ${props => props.theme.gold};
        -webkit-text-stroke: 2px ${props => props.theme.gold};
      }
      &.highlighted {
        h1 {
          color: transparent;
          -webkit-text-stroke: 2px ${props => props.theme.gold};
        }
      }
    }
    &:nth-child(4n + 4) {
      h1 {
        color: ${props => props.theme.maroon};
        -webkit-text-stroke: 2px ${props => props.theme.maroon};
      }
      &.highlighted {
        h1 {
          color: transparent;
          -webkit-text-stroke: 2px ${props => props.theme.maroon};
        }
      }
    }

    h1 {
      text-transform: uppercase;
      font-size: 14vw;
      display: inline-block;
      margin-block-start: 10px;
      margin-block-end: 10px;
      height: auto;
      transition: 0.5s all;
      line-height: 0.7;
      margin-block-start: 1rem;
      margin-block-end: 1rem;
      -webkit-margin-before: 1rem;
      -webkit-margin-after: 1rem;
      /* width: max-content; */
      word-break: break-word;
      &:hover {
        color: transparent;
      }

      @media screen and (max-width: 768px) {
        font-size: 18vw;
        -webkit-margin-before: 10px;
        -webkit-margin-after: 10px;
}
      }
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: ${props => props.theme.darkerOffWhite};
  position: relative;

  &:first-of-type {
    @media screen and (max-width: 768px) {
      transform: rotateX(20deg) !important;
    }
  }

  &:last-of-type {
    @media screen and (max-width: 768px) {
      transform: rotateX(20deg) !important;
    }
  }
`;

export const InnerWrap = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: ${props =>
    props.order ? `calc((-100vh / 3) * ${props.order});` : "0"};
`;
