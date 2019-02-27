import React from "react";
import styled from "styled-components";
import { genId, _onShareClick, _addHighlightClass } from "./helpers";

const OuterWrap = styled.div`
  overflow: hidden;
`;

const _renderNamesWithId = (names, highlightedid) => {
  if (names) {
    return names.map((woman, index) => {
      const personId = genId(woman.name);
      //   console.log(personId);

      return (
        <div
          data-nameid={personId}
          className={
            highlightedid === personId
              ? `womanItem ${personId} ${highlightedid} highlighted`
              : `womanItem ${personId}`
          }
          key={woman.id + personId + index}
          onClick={e => _addHighlightClass(e)}
        >
          <span className="inner-relative">
            <span onClick={e => _onShareClick(e)} className="super-cta">
              Share
            </span>
            <h1>{woman.name}</h1>
          </span>
        </div>
      );
    });
  }
};

const _renderNames = (names, highlightedid) => {
  if (names) {
    return names.map((woman, index) => {
      const personId = genId(woman.name);
      return (
        <div
          className={
            highlightedid === personId
              ? `womanItem ${personId} ${highlightedid} highlighted`
              : `womanItem ${personId}`
          }
          key={woman.id + personId + index}
          onClick={e => _addHighlightClass(e)}
        >
          <span className="inner-relative">
            <span onClick={e => _onShareClick(e)} className="super-cta">
              Share
            </span>
            <h1>{woman.name}</h1>
          </span>
        </div>
      );
    });
  }
};

// TODO: figure out why mouseMove is causing this component to rerender

class InnerNames extends React.PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     const namesDiff = this.props.names !== nextProps.names;
  //     const highlightDiff = this.props.highlightedid !== nextProps.highlightedid;
  //     const renderwithidDiff = this.props.renderwithid !== nextProps.renderwithid;
  //     console.log({ namesDiff, highlightDiff, renderwithidDiff });

  //     if (this.props.names === nextProps.names) {
  //       console.log("the component will NOT update");
  //       return false;
  //     } else {
  //       console.log(this.props, nextProps);
  //       console.log("the component will update");
  //       return true;
  //     }
  //   }

  render() {
    // console.log(this.props);
    console.log("rendering");
    return (
      <OuterWrap>
        {this.props.renderwithid
          ? _renderNamesWithId(this.props.names, this.props.highlightedid)
          : _renderNames(this.props.names, this.props.highlightedid)}
      </OuterWrap>
    );
  }
}

export default InnerNames;
