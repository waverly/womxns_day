import { Component } from "react";
import Women from "../components/Women";
import { endpoint } from "../config";

export default class Names extends Component {
  static async getInitialProps() {
    const response = await fetch(`${endpoint}/names`);
    const json = await response.json();
    const women = json.result;
    return { women };
  }
  render() {
    return (
      <div>
        <Women {...this.props} />
      </div>
    );
  }
}
