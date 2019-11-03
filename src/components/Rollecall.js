import React from "react";
import ListItem from "./ListItem";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

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
          number,
          there: true
        });
      }
    }
    if (elements.length !== 0) {
      this.state = {
        elements: elements,
        currentName: elements[0]["name"],
        currentNumber: elements[0]["number"],
        there: elements[0].there
      };
    }
    this.onClick = this.onClick.bind(this);
    this.onClickBad = this.onClickBad.bind(this);
  }

  onClick() {
    if (this.state.elements.length > 1) {
      console.log(this.state);
      this.state.elements.shift();
      const newName = this.state.elements[0]["name"];
      const newNumber = this.state.elements[0]["number"];
      this.setState({
        currentName: newName,
        currentNumber: newNumber,
        there: this.state.elements[0].there
      });
    } else {
      this.props.history.push("/yay");
    }
  }

  onClickBad() {
    const notThere = this.state.elements.shift();
    notThere.there = false;
    this.state.elements.push(notThere);
    const newName = this.state.elements[0]["name"];
    const newNumber = this.state.elements[0]["number"];
    this.setState({
      currentName: newName,
      currentNumber: newNumber,
      there: this.state.elements[0].there
    });
  }

  render() {
    return (
      <div className="list-container">
        <ListItem
          name={this.state.currentName}
          number={this.state.currentNumber}
          there={this.state.there}
        />
        <div className="btns">
          <Button variant="outlined" onClick={this.onClick}>
            <span>✅</span>
          </Button>
          <Button variant="outlined" onClick={this.onClickBad}>
            <span>❌</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Rollecall);
