import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";
import { genId, setBodyHeight } from "./helpers";

class WomenList extends Component {
  state = {
    scrollTop: 0,
    newlyAddedItem: null
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
        const womenWrapper = document.getElementById("womanList");
        const scrollEl = document.querySelector(`[data-nameid=${id}]`);

        console.log(womenWrapper);
        console.log(scrollEl);
        console.log(womenWrapper);

        // setTimeout(() => {
        //   const timeoutscrollel = document.querySelector(
        //     `[data-nameid="jenny"]`
        //   );
        //   console.log(timeoutscrollel);
        // }, 500);

        // debugger;

        if (scrollEl) {
          const elScrollHeight = scrollEl.offsetTop;
          console.log(womenWrapper);
          console.log(scrollEl);
          console.log(elScrollHeight);
          console.log(womenWrapper.lastChild.lastChild);
          const halfHeight = window.innerHeight / 2.5;
          const totalScrollHeight = elScrollHeight - halfHeight;
          document.querySelectorAll(`.${id}`).forEach(el => {
            el.classList.add("highlighted");
          });
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

  _calcWomenList = () => {
    if (this.props.women) {
      console.log("running calc women list");
      this.womenWithId = this.props.women.map((woman, index) => {
        const personId = genId(woman.name);

        return (
          <div
            data-nameid={personId}
            className={`womanItem ${personId}`}
            key={woman.id + personId + index}
            onClick={e => this._addHighlightClass(e)}
          >
            <span className="inner-relative">
              <span onClick={e => this._onShareClick(e)} className="super-cta">
                Share
              </span>
              <h1>{woman.name}</h1>
            </span>
          </div>
        );
      });

      this.allWomen = this.props.women.map((woman, index) => {
        const personId = genId(woman.name);

        return (
          <div
            onClick={e => this._addHighlightClass(e)}
            className={`womanItem ${personId}`}
            key={woman.id + index}
          >
            <span className="inner-relative">
              <span onClick={e => this._onShareClick(e)} className="super-cta">
                Share
              </span>
              <h1>{woman.name}</h1>
            </span>
          </div>
        );
      });
    }
  };

  componentWillMount() {
    this._calcWomenList();
    console.log(this.props.women[this.props.women.length - 1]);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.women.length, this.props.women.length);
    if (nextProps.women.length !== this.props.women.length) {
      console.log(
        "COMPONENT WILL RECEIVE PROPS, next and current props are diff lengths"
      );
      console.log(nextProps.women[nextProps.women.length - 1]);
      // this._scrollToHash();
    }
  }

  componentDidMount() {
    setBodyHeight();
    document.addEventListener("scroll", this._throttleScroll);
    window.addEventListener("resize", setBodyHeight);
    this.setState({ scrollTop: window.pageYOffset });
    console.log(this.props.women[this.props.women.length - 1]);

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

  _onShareClick = e => {
    console.log("inside ons hare click");
    const id = e.currentTarget.parentNode.parentNode.dataset.nameid;
    console.log({ id });
    const domain = "http://localhost:7777";
    const link = `${domain}/names#${id}`;
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.classList.add("display-none");
    dummy.innerHTML = link;
    console.log(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    console.log(link);
    e.currentTarget.innerHTML = "Copied to clipboard";
  };

  _addHighlightClass = e => {
    // extract data-nameid
    const dataId = e.currentTarget.dataset.nameid;
    document
      .querySelectorAll(`.${dataId}`)
      .forEach(el => el.classList.add("highlighted"));
    // el.classList.addClass("highlighted");
  };

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
                <div className="hidden">{this.allWomen}</div>
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
                <div className="hidden">{this.womenWithId}</div>
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
                  transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
                }}
                order={2}
                className="womenWrapper"
              >
                {this.allWomen}
              </InnerWrap>
            </div>
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
