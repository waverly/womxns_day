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
    width: 100%;
  }

  .womanItem {
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    &:nth-child(3n + 1) {
      h1 {
        text-align: left;
      }
    }
    &:nth-child(3n + 2) {
      h1 {
        text-align: center;
      }
    }
    &:nth-child(3n + 3) {
      h1 {
        text-align: right;
      }
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
      width: 100%;
      display: block;
      margin-block-start: 10px;
      margin-block-end: 10px;
      height: auto;
      transition: 0.5s all;
      line-height: 0.7;
      margin-block-start: 1rem;
      margin-block-end: 1rem;
      &:hover {
        color: transparent;
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
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 80%;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(${props => props.theme.offWhite}),
        to(rgba(17, 17, 17, 0))
      );
      background: -webkit-linear-gradient(
        top,
        from(${props => props.theme.offWhite}),
        rgba(17, 17, 17, 0)
      );
      background: -o-linear-gradient(
        top,
        from(${props => props.theme.offWhite}),
        rgba(17, 17, 17, 0)
      );
      background: linear-gradient(
        to bottom,
        from(${props => props.theme.offWhite}),
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
        from(from(${props => props.theme.offWhite})),
        to(rgba(17, 17, 17, 0))
      );
      background: -webkit-linear-gradient(
        top,
        rgba(17, 17, 17, 0),
        from(${props => props.theme.offWhite})
      );
      background: -o-linear-gradient(
        top,
        rgba(17, 17, 17, 0),
        from(${props => props.theme.offWhite})
      );
      background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0),
        from(${props => props.theme.offWhite})
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
