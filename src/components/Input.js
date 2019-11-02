import React from "react";
import TextField from "@material-ui/core/TextField";

class Input extends React.Component {
  render() {
    return (
        <TextField
          id="outlined-basic"
          label={this.props.label}
          margin="normal"
          variant="outlined"
          onChange={this.props.onChange}
        />
    );
  }
}

export default Input;
