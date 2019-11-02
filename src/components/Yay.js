import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

function Yay(props) {
    return (
        <div className="list-container">
            <h1>Everyone's on board 😎</h1>
            <Button variant="outlined" color="primary" onClick={(e) => {
                props.history.push("/");
            }}> Back to home </Button>
        </div>
    )
}

export default withRouter(Yay);