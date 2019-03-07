import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { genId, _onShareClick, _addHighlightClass } from "./helpers";
import { frontend } from "../config";

const OuterWrap = styled.div`
  overflow: hidden;
  padding-top: 40vh;
`;

// TODO: figure out why mouseMove is causing this component to rerender

class InnerNames extends React.PureComponent {
  state = {
    copied: false
  };

  _renderNamesWithId = (names, highlightedid) => {
    if (names) {
      return names.map((woman, index) => {
        const personId = genId(woman);
        return (
          <div
            data-scrollid={personId}
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
              <CopyToClipboard
                text={`${frontend}/names#${personId}`}
                onCopy={() => this.setState({ copied: true })}
              >
                <span className="super-cta">
                  {this.state.copied ? "Copied to clipboard" : "Share"}
                </span>
              </CopyToClipboard>

              <h1>{woman}</h1>
            </span>
          </div>
        );
      });
    }
  };

  _renderNames = (names, highlightedid) => {
    if (names) {
      return names.map((woman, index) => {
        const personId = genId(woman);

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
              <CopyToClipboard
                text={`${frontend}/names#${personId}`}
                onCopy={() => this.setState({ copied: true })}
              >
                <span className="super-cta">
                  {this.state.copied ? "Copied to clipboard" : "Share"}
                </span>
              </CopyToClipboard>

              <h1>{woman}</h1>
            </span>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <OuterWrap>
        {this.props.renderwithid
          ? this._renderNamesWithId(this.props.names, this.props.highlightedid)
          : this._renderNames(this.props.names, this.props.highlightedid)}
      </OuterWrap>
    );
  }
}

export default InnerNames;
