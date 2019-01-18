import React from "react";


const Button = (props) => {
    
    return(
        <div className="field is-grouped customBaseButton">

            <p className="control">

                <a className="button is-link" 
                    disabled={props.isList === true ? true : false}
                    onClick={props.isList === false ? props.click : () => {}}>

                    <span className="icon" style={{ marginRight: 3 }} >
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </span>

                    Back
                </a> 
            </p>

            <p className="control">
            
                <a className="button is-danger" 
                    disabled={props.isList === false ? true : false}
                    onClick={props.isList === true ? props.click : () => {}}>

                    <span className="icon"style={{ marginRight : 3}} >
                        <i className="fas fa-plus"></i>
                    </span>
                    
                    Add
                </a>
            </p>

        </div>
    
) }
export default Button;