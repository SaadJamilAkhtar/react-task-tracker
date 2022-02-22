import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button"
function Header(props) {
    return (
        <header className={"header"}>
            <h1>{props.title}</h1>
            <Button color={'green'} text={"Add +"}/>
        </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;