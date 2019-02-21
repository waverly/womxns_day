import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import WomanStyles from "./styles/WomanStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default class Woman extends Component {
  static propTypes = {
    woman: PropTypes.object.isRequired
  };

  render() {
    const { woman } = this.props;
    return <WomanStyles>{woman.name}</WomanStyles>;
  }
}
