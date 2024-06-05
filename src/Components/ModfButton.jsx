import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ModfButton.css'

function ModfButton(){
    return(
        <div className="dim" >
            <button type="button" className="btn btn-success modbtn">Success</button>
        </div>
    )
}
export default ModfButton;