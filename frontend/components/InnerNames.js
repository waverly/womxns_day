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
  render() {
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
