import React from 'react';
import PropTypes from "prop-types";

function Button(props) {
    return (
        <button onClick={props.onClick} style={{backgroundColor: props.color}} className="btn">{props.text}</button>
    );
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.protoType = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
export default Button;