import React, { Component } from 'react';
import {render} from 'react-dom';

// Parent Component
class GroseryList extends Component {
  render(){
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="6" name="Eggs" />
        <ListItem quantity="2" name="Milk" />
      </ul>
      );
  }
}

// Child Component
class ListItem extends Component {
  render() {
      return (
          <li>
              {this.props.quantity} × {this.props.name}
          </li>
      );
  }
}
render(<GroseryList />, document.getElementById('root'));

//Second 

// Parent Component
class GroceryList2 extends Component {
  render() {
      return (
          <ul>
              <ListItem2 quantity="1">Bread</ListItem2>
              <ListItem2 quantity="2">Eggs</ListItem2>
              <ListItem2 quantity="3">Milk</ListItem2>
          </ul>
      );
  }
}
// Child Component
class ListItem2 extends Component {
  render() {
      return (
          <li>
              {this.props.quantity} × {this.props.children}
          </li>
      );
  }
}
render(<GroceryList2 />, document.getElementById('root2'));