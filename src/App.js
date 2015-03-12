import React from 'react';

class Parent extends React.Component {
  getChildContext() {
    return {
      parentId: this.props.id
    }
  }

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}
Parent.childContextTypes = {
  parentId: React.PropTypes.string.isRequired
}

class Child extends React.Component {
  render() {
    return <li>{this.context.parentId} - {this.props.id}</li>;
  }
}
Child.contextTypes = {
  parentId: React.PropTypes.string.isRequired
}

export default class App extends React.Component {
  render() {
    return (
      <Parent id="foo">
        <Child id="bar"/>
        <Child id="baz"/>
      </Parent>
    );
  }
}