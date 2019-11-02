import React from "react";
import { Button } from "@material-ui/core";
import {withRouter} from 'react-router-dom';


function Confirm(props) {
    return (
        <div className="list-container">
            <h1>You're all set!</h1>
            <Button variant="outlined" color="primary" onClick={(e) => {
                props.history.push("/");
            }}> + more</Button>
            <Button variant="outlined" color="secondary" onClick={(e) => {
                props.history.push("/list");
            }}> View rollecall</Button>
        </div>
    )
}

export default withRouter(Confirm);