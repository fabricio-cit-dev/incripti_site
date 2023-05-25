import React, { Component, Children } from "react";
import PropTypes from "prop-types";

class LanguageSwitch extends Component {
  // let’s define what’s needed from the `context`
  static contextTypes = {
    language: PropTypes.string
  };

  render() {
    if (this.context.language === this.props.language) {
      return Children.only(this.props.children);
    } else {
      return "";
    }
  }
}

export default LanguageSwitch;
