import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

class List extends React.Component {
  render() {
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
    const listItems = elements.map((el, key) => {
      return <ListItem name={el.name} number={el.number} key={key} />;
    });
    return (
      <div>
        <Header />
        <div style={{textAlign: "center"}}>Count: {listItems.length}</div>
        <div className="cards-container">{listItems}</div>
        <div className="container">
          {listItems.length === 0 ? (
            <div className="list-container">
              <h3 style={{ color: "grey" }}>No one's on the rollecall :(</h3>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                + more
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="outlined"
                onClick={() => {
                  window.localStorage.clear();
                  window.location.reload();
                }}
              >
                Clear
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                    this.props.history.push("/rollecall");
                }}
              >
                Rollecall
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(List);
