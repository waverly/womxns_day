import React from "react";
import Link from "next/link";
import { ShareContainer } from "./styles/ShareStyles";

const Share = props => {
  if (props.woman) {
    return (
      <ShareContainer>
        <p>Thanks for adding {props.woman.name} to the list!</p>
        <Link href={`#${props.woman.id}`}>
          <a>Share it with her</a>
        </Link>
      </ShareContainer>
    );
  } else {
    return null;
  }
};

export default Share;
