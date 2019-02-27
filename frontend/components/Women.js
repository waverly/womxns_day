import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Nav from "./Nav";
import WomenList from "./WomenList";

const ALL_WOMEN_QUERY = gql`
  query ALL_WOMEN_QUERY {
    women(orderBy: createdAt_DESC) {
      id
      name
      createdAt
    }
  }
`;

const Center = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  perspective: 150px;
  top: 0;
  left: 0;
`;

const ManifestoWrapper = styled.button`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => (props.display ? "block" : "none")};
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
    margin: 0 auto;
  }

  h1 {
    color: ${props => props.theme.green};
  }
`;

const calcX = x => {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (x) {
      let newX = x;
      if (x === 0) {
        newX = x + 0.001;
      }
      const center = window.innerWidth / 2;
      const distFromCenter = newX - center;
      const decimal = distFromCenter / center;
      const randVal = Math.floor(decimal * 0.95) + 0.6;
      return (newX - window.innerWidth / 2) / 100;
    }
  }
};

const calcY = y => {
  if (typeof window === "undefined") {
    console.log("type of window undefine");
    return null;
  } else {
    let newY = y;
    if (y === 0) {
      newY = y + 0.001;
    }
    const center = window.innerHeight / 2;
    const distFromCenter = newY - center;
    const matrix3DVal = (distFromCenter * 0.67) / center;
    return distFromCenter;
  }
};

const calcMatrix3D1 = y => {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (y) {
      const center = window.innerHeight / 2;
      const distFromCenter = y - center;

      const matrix3DVal = (distFromCenter * 0.5) / center;
      // console.log({ center, distFromCenter, matrix3DVal });
      return matrix3DVal;
    } else return 0;
  }
};

const calcMatrix3D2 = y => {
  if (typeof window === "undefined") {
    console.log("window was undefined");
    return 0;
  } else {
    if (y) {
      const center = window.innerHeight / 2;
      const absFromCenter = Math.abs(y - center);

      const a = 0.99;
      const b = 0.74;
      const min = 0;
      const max = center;
      const x = absFromCenter;

      const scaled = ((b - a) * (x - min)) / (max - min) + a;
      // console.log({ scaled });

      return scaled;
    } else return 0;
  }
};

class Women extends Component {
  state = {
    x: null,
    y: null,
    displayManifesto: true,
    formFocused: 0
  };

  _onMouseMove = e => {
    this.setState({
      x: calcX(e.clientX),
      y: calcY(e.clientY),
      matrix3DVal1: calcMatrix3D1(e.clientY),
      matrix3DVal2: calcMatrix3D2(e.clientY)
    });
  };

  _closeManifesto = () => {
    this.setState({ displayManifesto: false });
  };

  _onFormFocus = () => {
    console.log("hi hi hi hi hi in focus");
    this.setState({ formFocused: 1 });
  };

  _onFormBlur = () => {
    console.log("hi hi hi hi hi in blur");
    this.setState({ formFocused: 0 });
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <Center onMouseMove={this._onMouseMove}>
          <Query query={ALL_WOMEN_QUERY} refetch={true}>
            {({ data, error, loading }) => {
              if (loading) return null;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <Fragment>
                  <WomenList
                    formFocused={this.state.formFocused}
                    women={data.women}
                    x={this.state.x}
                    y={this.state.y}
                    matrix3DVal1={this.state.matrix3DVal1}
                    matrix3DVal2={this.state.matrix3DVal2}
                  />
                </Fragment>
              );
            }}
          </Query>
        </Center>
      </Fragment>
    );
  }
}

export default Women;
export { ALL_WOMEN_QUERY };
