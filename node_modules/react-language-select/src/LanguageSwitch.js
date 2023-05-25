import React, { Component } from "react";
import PropTypes from "prop-types";

class LanguageSwitch extends Component {
  // let’s define what’s needed from the `context`
  static contextTypes = {
    language: PropTypes.string
  };

  render() {
    return this.props[this.context.language];
  }
}

export default LanguageSwitch;
