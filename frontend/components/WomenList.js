import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";
import { genId, setBodyHeight, _addHighlightClass } from "./helpers";
import InnerNames from "./InnerNames";

class WomenList extends Component {
  state = {
    scrollTop: 0,
    newlyAddedItem: null,
    highlightedId: null
  };

  allWomen = null;
  womenWithId = null;

  _scrollToHash = () => {
    console.log("scroll to hash fx");
    if (typeof window === "undefined") {
      return 0;
    } else {
      const hash = window.location.hash;
      if (hash !== "") {
        const id = hash.substr(1);
        this.setState({ highlightedId: id });

        // TODO: refactor to use refs instead
        const womenWrapper = document.getElementById("womanList");
        const scrollEl = document.querySelector(`[data-nameid=${id}]`);

        // console.log(womenWrapper);
        // console.log(scrollEl);

        // debugger;

        if (scrollEl) {
          const elScrollHeight = scrollEl.offsetTop;
          const halfHeight = window.innerHeight / 2.5;
          const totalScrollHeight = elScrollHeight - halfHeight;
          document.querySelectorAll(`.${id}`).forEach(el => {
            el.classList.add("highlighted");
          });

          // console.log(totalScrollHeight);
          window.scrollTo({
            top: totalScrollHeight,
            left: 0
            // behavior: "smooth"
          });
        } else {
          window &&
            typeof window === "object" &&
            window.scrollTo &&
            typeof window.scrollTo === "function" &&
            window.scrollTo(0, 0);
        }
      }
    }
  };

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    setBodyHeight();
    document.addEventListener("scroll", this._throttleScroll);
    window.addEventListener("resize", setBodyHeight);
    this.setState({ scrollTop: window.pageYOffset });

    console.log("COMPONENT DID MOUNT");
    this._scrollToHash();
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
    this.setState({ scrollTop: bodyScrollTop });
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  render() {
    // const reversedNames = this.props.women.reverse();
    const names = [{ name: "one" }, { name: "two" }, { name: "three" }];
    // console.log(names);
    // const names = this.props.women;
    const reversedNames = this.props.women;

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
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                className="womenWrapper"
              >
                <InnerNames
                  highlightedid={this.state.highlightedId}
                  names={reversedNames}
                />
              </InnerWrap>
            </div>
          </Container>
          <Container>
            <div className="hidden">
              <InnerWrap
                id="womanList"
                style={{
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                order={1}
                className="womenWrapper"
              >
                <InnerNames
                  highlightedid={this.state.highlightedId}
                  names={reversedNames}
                  renderwithid={true}
                />
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
            <InnerWrap
              style={{
                transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
              }}
              order={2}
              className="womenWrapper"
            >
              <InnerNames
                highlightedid={this.state.highlightedId}
                names={reversedNames}
              />
            </InnerWrap>
          </Container>
        </WomenListWrap>
      </Fragment>
    );

    return containers;
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
