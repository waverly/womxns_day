import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Woman from "./Woman";
import CreateWoman from "./CreateWoman";
import WomenList from "./WomenList";
import { Manifesto } from "./Manifesto";

const ALL_WOMEN_QUERY = gql`
  query ALL_WOMEN_QUERY {
    women {
      id
      name
      description
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
      console.log({ x, newX });
      const center = window.innerWidth / 2;
      const distFromCenter = newX - center;

      const decimal = distFromCenter / center;

      const randVal = Math.floor(decimal * 0.9) + 0.7;
      return (newX - window.innerWidth / 2) / 100;

      // how to only update if x is not 0
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
    displayManifesto: true
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

  render() {
    return (
      <Center onMouseMove={this._onMouseMove}>
        {/* <ManifestoWrapper
          display={this.state.displayManifesto}
          onClick={this._closeManifesto}
        >
          <div className="module">
            <h1>
              <em>Today is International Woman's Day.</em>
            </h1>
            <p>
              Why is this day important? Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </ManifestoWrapper> */}

        <Query query={ALL_WOMEN_QUERY} refetch={true}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Fragment>
                {/* <ThreeWomen women={data.women} /> */}
                <WomenList
                  women={data.women}
                  x={this.state.x}
                  y={this.state.y}
                  matrix3DVal1={this.state.matrix3DVal1}
                  matrix3DVal2={this.state.matrix3DVal2}
                />
                <CreateWoman />
              </Fragment>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Women;
export { ALL_WOMEN_QUERY };
