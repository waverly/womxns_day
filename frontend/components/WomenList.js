import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";
import { setBodyHeight, _addHighlightClass } from "./helpers";
import InnerNames from "./InnerNames";

class WomenList extends Component {
  state = {
    scrollTop: 0,
    newlyAddedItem: null,
    highlightedId: null,
    copied: {}
  };

  allWomen = null;
  womenWithId = null;

  _setCopied = personId => {
    const copy = Object.assign({}, this.state.copied);
    copy[personId] = true;
    this.setState({ copied: copy });
  };

  _scrollToHash = () => {
    if (typeof window === "undefined") {
      return 0;
    } else {
      const hash = window.location.hash;
      if (hash !== "") {
        const id = hash.substr(1);
        this.setState({ highlightedId: id });

        // TODO: refactor to use refs instead
        const womenWrapper = document.getElementById("womanList");
        const scrollEl = document.querySelector(`[data-scrollid=${id}]`);

        if (scrollEl) {
          const elScrollHeight = scrollEl.offsetTop;
          const halfHeight = window.innerHeight / 2.5;
          const totalScrollHeight = elScrollHeight - halfHeight;
          document.querySelectorAll(`.${id}`).forEach(el => {
            el.classList.add("highlighted");
          });

          window.scrollTo({
            top: totalScrollHeight,
            left: 0
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

  componentDidUpdate(prevProps) {
    // console.log(prevProps.women, this.props.women);
    if (prevProps.women !== this.props.women) {
      setBodyHeight();
    }
  }

  _debounceSetBodyHeight = _.debounce(setBodyHeight, 10);

  componentDidMount() {
    setBodyHeight();
    document.addEventListener("scroll", this._throttleScroll);
    window.addEventListener("resize", setBodyHeight);
    this.setState({ scrollTop: window.pageYOffset });
    this._scrollToHash();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", setBodyHeight);
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      document.removeEventListener("scroll", this._throttleScroll);
    }
  }

  _onScroll = e => {
    const bodyScrollTop = window.pageYOffset;
    this.setState({ scrollTop: bodyScrollTop });
    console.log("in scroll", this.state.scrollTop);
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  render() {
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
                  names={this.props.women}
                  setCopied={this._setCopied}
                  copied={this.state.copied}
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
                  names={this.props.women}
                  renderwithid={true}
                  setCopied={this._setCopied}
                  copied={this.state.copied}
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
                names={this.props.women}
                setCopied={this._setCopied}
                copied={this.state.copied}
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
