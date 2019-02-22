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
    this.setState({ scrollTop: window.pageYOffset });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.women.length !== this.props.women.length) {
      setBodyHeight();
      console.log(this.props.women[this.props.women.length - 1]);

      const newEl = document
        .getElementById("womanList")
        .querySelector(".hidden").lastChild;

      newEl.classList.add("highlighted");

      const newElId = newEl.dataset.nameid;

      console.log(document.getElementById("womanList").lastChild);

      const newlyAddedItem = {
        name: this.props.women[this.props.women.length - 1].name,
        id: newElId
      };

      console.log({ newElId });
      this.setState({ newlyAddedItem });
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0
        // behavior: "smooth"
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
    const bodyScrollTop = window.pageYOffset;
    console.log(window.pageYOffset);
    this.setState({ scrollTop: bodyScrollTop });
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  render() {
    if (this.props.women) {
      const womenWithId = this.props.women.map((woman, index) => {
        const personId =
          woman.name
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("") + index;
        return (
          <div
            data-nameid={personId}
            className={`womanItem ${personId}`}
            key={woman.id + personId + index}
          >
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const allWomen = this.props.women.map((woman, index) => {
        const personId =
          woman.name
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("") + index;

        return (
          <div className={`womanItem ${personId}`} key={woman.id + index}>
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const containers = (
        <Fragment>
          <WomenListWrap
            formFocused={this.props.formFocused}
            style={{
              transform: `rotateY(${this.props.x}deg)`
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
              <div className="hidden">
                <InnerWrap
                  order={0}
                  style={{
                    transform: `translate3d(0px, -${
                      this.state.scrollTop
                    }px, 0px)`
                  }}
                  className="womenWrapper"
                >
                  <div className="hidden">{allWomen}</div>
                </InnerWrap>
              </div>
            </Container>
            <Container>
              <div className="hidden">
                <InnerWrap
                  id="womanList"
                  style={{
                    // position: `relative`,
                    // zIndex: `10`,
                    transform: `translate3d(0px, -${
                      this.state.scrollTop
                    }px, 0px)`
                  }}
                  order={1}
                  className="womenWrapper"
                >
                  <div className="hidden">{womenWithId}</div>
                </InnerWrap>
              </div>
            </Container>
            <Container
              style={{
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
              <div className="hidden">
                <InnerWrap
                  style={{
                    transform: `translate3d(0px, -${
                      this.state.scrollTop
                    }px, 0px)`
                  }}
                  order={2}
                  className="womenWrapper"
                >
                  {allWomen}
                </InnerWrap>
              </div>
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
