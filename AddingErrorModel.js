import React from "react";

const AddingErrorModel=props=>{

    return(
        <div>
            <h1>{props.title}</h1>
            <div>
                {props.age}
            </div>
        <div>
            <button type="button" onClick={props.onsend}>okay</button>
        </div>
        </div>
    )
}
export default AddingErrorModel;