import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";
import Share from "./Share";
import { setBodyHeight } from "./helpers";

class WomenList extends Component {
  state = {
    scrollTop: 0,
    newlyAddedItem: null
  };

  componentDidMount() {
    setBodyHeight();
    document.addEventListener("scroll", this._throttleScroll);
    window.addEventListener("resize", setBodyHeight);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.women.length !== this.props.women.length) {
      setBodyHeight();
      console.log("a new woman has been added to the list.");
      console.log(this.props.women[this.props.women.length - 1]);

      const newElId = document.getElementById("womanList").lastChild.id;
      const newlyAddedItem = {
        name: this.props.women[this.props.women.length - 1].name,
        id: newElId
      };

      console.log({ newElId });
      this.setState({ newlyAddedItem });
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  componentWillUnmount() {
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      document.removeEventListener("scroll", this._throttleScroll);
    }
  }

  // This will run the first time setBodyHeight is called.
  _onScroll = e => {
    console.log("on scroll called");
    const bodyScrollTop = window.pageYOffset;
    this.setState({ scrollTop: bodyScrollTop });
    console.log(bodyScrollTop, document.body.scrollTop, this.state.scrollTop);
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  render() {
    if (this.props.women) {
      const allWomen = this.props.women.map((woman, index) => {
        //  TODO: clean up ids - how to deal with duplicates?
        const personId =
          woman.name
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("") + index;

        // console.log(personId);
        return (
          <div id={personId} className="womanItem" key={woman.id + index}>
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const containers = (
        <Fragment>
          <WomenListWrap
            style={{
              transform: `rotateY(${this.props.x * 2}deg)`
            }}
          >
            <Container
              style={{
                transformOrigin: `bottom center`,
                transform: `matrix3d(
                1,
                0,
                0,
                0,
                0,
                ${this.props.matrix3DVal2},
                ${this.props.matrix3DVal1},
                0,
                0,
                ${this.props.matrix3DVal1 * -1},
                ${this.props.matrix3DVal2},
                0,
                0,
                0,
                0,
                1
              )`
              }}
            >
              <InnerWrap
                order={0}
                style={{
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                id="womanList"
                className="womenWrapper"
              >
                {allWomen}
              </InnerWrap>
            </Container>
            <Container>
              <InnerWrap
                style={{
                  position: `relative`,
                  zIndex: `10`,
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                order={1}
                className="womenWrapper"
              >
                {allWomen}
              </InnerWrap>
            </Container>
            <Container
              // transform: matrix3d(1, 0, 0, 0, 0, 0.740218, -0.672367, 0, 0, 0.672367, 0.740218, 0, 0, 0, 0, 1);
              style={{
                //   transform: `rotateX(${this.props.y * -1}deg)`

                transformOrigin: `top center`,
                transform: `matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  ${this.props.matrix3DVal2},
                  ${this.props.matrix3DVal1},
                  0,
                  0,
                  ${this.props.matrix3DVal1 * -1},
                  ${this.props.matrix3DVal2},
                  0,
                  0,
                  0,
                  0,
                  1
                )`
              }}
            >
              <InnerWrap
                style={{
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                order={2}
                className="womenWrapper"
              >
                {allWomen}
              </InnerWrap>
            </Container>
          </WomenListWrap>
          <Share woman={this.state.newlyAddedItem} />
        </Fragment>
      );

      return containers;
    } else return null;
  }
}

// Set default props
WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};

export default WomenList;
