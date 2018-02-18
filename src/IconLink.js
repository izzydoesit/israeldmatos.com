import React, { Component } from 'react';


export default class IconLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Icon = this.props.icon;

    return (
      <div> 
        <a 
          href={this.props.url}
          className="flex social-link"
        >
          <Icon size={40} className="icon" />
        </a>
      </div>
    )
  }
}
