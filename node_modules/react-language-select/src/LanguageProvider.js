import React, { Component, Children } from "react";
import PropTypes from "prop-types";

class LanguageProvider extends Component {
  // you must specify what you’re adding to the context
  static childContextTypes = {
    language: PropTypes.string.isRequired
  };

  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  };

  getChildContext() {
    return {
      language: this.props.currentLanguage
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default LanguageProvider;
