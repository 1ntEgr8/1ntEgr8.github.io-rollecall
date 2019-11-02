import React from "react";
import ListItem from "./ListItem";
import { Button } from "@material-ui/core";
import {withRouter} from 'react-router-dom';

class Rollecall extends React.Component {
  constructor(props) {
    super(props);
    const keys = Object.keys(window.localStorage);
    const elements = [];
    for (let key of keys) {
      if (key.includes("name")) {
        const nameIndex = key.indexOf(";");
        const name = key.substring(nameIndex + 1);
        const number = window.localStorage.getItem(key);
        elements.push({
          name,
          number
        });
      }
    }
    this.state = {
      elements: elements,
      counter: 0,
      currentName: elements[0]["name"],
      currentNumber: elements[0]["number"]
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if ((this.state.counter + 1) < this.state.elements.length) {
      console.log(this.state);
      const newName = this.state.elements[this.state.counter+1]["name"];
      const newNumber = this.state.elements[this.state.counter+1]["number"]
      this.setState({
        counter: this.state.counter +1,
        currentName: newName,
        currentNumber: newNumber
      });
    } else {
      this.props.history.push("/yay");
    }
  }
  render() {
    return (
      <div class="container">
        <ListItem name={this.state.currentName} number={this.state.currentNumber} />
        <Button variant="outlined" onClick={this.onClick}><span>✅</span></Button>
      </div>
    )
  }
}

export default withRouter(Rollecall);
