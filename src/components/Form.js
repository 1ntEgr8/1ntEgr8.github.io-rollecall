import React from "react";
import Input from "./Input";
import Button from "@material-ui/core/Button";
import {
	withRouter
} from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.state = {
        "name": "",
        "phone-number": ""
    }
  }

  onChangeNumber(e) {

    e.target.addEventListener('keydown', function(event) {
        var key = event.keyCode || event.charCode;
    
        if( key === 8 || key === 46 ) {

        }
    });

    const value = e.target.value;
    let acceptedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= "0" && value[i] <= "9") {
        acceptedValue += value[i];
      }
      if (i > 8) {
        break;
      }
    }
    e.target.value = acceptedValue;
    this.setState({
        "phone-number": acceptedValue
    })
  }

  onChangeName(e) {
    this.setState({
        "name": e.target.value
    })
  }

  onSubmit(e) {
      window.localStorage.setItem("name;" + this.state.name, this.state["phone-number"]);
      e.preventDefault();
      this.props.history.push("/confirm");
  }

  render() {
    return (
      <form>
        <Input id="name" name="name" label="Name" onChange={this.onChangeName}/>
        <Input id="phone-number" name="number" label="Phone number" onChange={this.onChangeNumber} />
        <Button color="secondary" onClick={this.onSubmit} type="submit" variant="contained">
            Submit
        </Button>
      </form>
    );
  }
}

export default withRouter(Form);
