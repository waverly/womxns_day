import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";
import { genId, setBodyHeight } from "./helpers";

class WomenList extends Component {
  state = {
    scrollTop: 0,
    newlyAddedItem: null,
    scrollUpdatedOnLoad: false
  };

  allWomen = null;
  womenWithId = null;

  _scrollToHash = () => {
    console.log("inside scrolltohash");
    if (!this.state.scrollUpdatedOnLoad) {
      console.log("inside scroll to hash");
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        const hash = window.location.hash;
        console.log({ hash });
        if (hash !== "") {
          const id = hash.substr(1);
          let elScrollHeight;
          elScrollHeight = document.querySelector(`[data-nameid=${id}]`)
            .offsetTop;
          console.log(elScrollHeight);

          const halfHeight = window.innerHeight / 2.5;
          const totalScrollHeight = elScrollHeight - halfHeight;
          document.querySelectorAll(`.${id}`).forEach(el => {
            el.classList.add("highlighted");
          });
          if (elScrollHeight) {
            window.scrollTo({
              top: totalScrollHeight,
              left: 0
              // behavior: "smooth"
            });
          }
        }
      } else {
        console.log("in else");
        window &&
          typeof window === "object" &&
          window.scrollTo &&
          typeof window.scrollTo === "function" &&
          window.scrollTo(0, 0);
      }
      this.setState({ scrollUpdatedOnLoad: true });
    }
  };

  _calcWomenList = () => {
    if (this.props.women) {
      this.womenWithId = this.props.women.map((woman, index) => {
        const personId = genId(woman.name);

        return (
          <div
            data-nameid={personId}
            className={`womanItem ${personId}`}
            key={woman.id + personId + index}
            onClick={this._addHighlightClass}
          >
            <h1>{woman.name}</h1>
          </div>
        );
      });

      this.allWomen = this.props.women.map((woman, index) => {
        const personId = genId(woman.name);

        return (
          <div
            onClick={this._addHighlightClass}
            className={`womanItem ${personId}`}
            key={woman.id + index}
          >
            <h1>{woman.name}</h1>
          </div>
        );
      });
    }
  };

  componentWillMount() {
    this._calcWomenList();
  }

  componentDidMount() {
    setBodyHeight();
    document.addEventListener("scroll", this._throttleScroll);
    window.addEventListener("resize", setBodyHeight);
    this.setState({ scrollTop: window.pageYOffset });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    // if a new woman has been added
    if (!this.state.scrollUpdatedOnLoad) {
      this._scrollToHash();
    }

    if (prevProps.women.length !== this.props.women.length) {
      this._calcWomenList();
      setBodyHeight();
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
    this.setState({ scrollTop: bodyScrollTop });
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  _addHighlightClass = e => {
    console.log("added highlight");
    console.log(e);
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
