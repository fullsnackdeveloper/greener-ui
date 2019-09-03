import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class Checkbox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  toggle = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const { children, placeholder, size, fullwidth } = this.props;
    const { checked } = this.state;
    let classes = classNames("Checkbox", size, { checked, fullwidth });
    return (
      <label className={classes}>
        <input
          type="checkbox"
          placeholder={placeholder}
          isChecked={this.state.checked}
          onClick={this.toggle}
        />
        <span>{children}</span>
        {!this.state.checked && (
          <i className="mdi mdi-checkbox-blank-circle-outline" />
        )}
        {this.state.checked && (
          <i className="mdi mdi-checkbox-marked-circle-outline" />
        )}
      </label>
    );
  }
}

Checkbox.defaultProps = {
  type: "text",
  placeholder: "Text",
  size: "regular"
};
