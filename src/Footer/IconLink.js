import React, { Component } from 'react';


export default class IconLink extends Component {

  render() {
    const Icon = this.props.icon;

    return (
      <a
        className="flex social-link"
        href={this.props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={40} className="icon" />
      </a>
    )
  }
}
