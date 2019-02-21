import React from "react";
import { ShareContainer } from "./styles/ShareStyles";

const Share = props => {
  if (props.woman) {
    return (
      <ShareContainer>
        <p>
          Thanks for adding {props.woman.name} to the list! Share it with her:
        </p>
        <a href={`https://www.northkingdom.com/${props.woman.id}`}>
          {`https://www.northkingdom.com/${props.woman.id}`}
        </a>
      </ShareContainer>
    );
  } else {
    return null;
  }
};

export default Share;
