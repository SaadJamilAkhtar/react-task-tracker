import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button"
function Header(props) {
    return (
        <header className={"header"}>
            <h1>{props.title}</h1>
            <Button color={props.showAdd? 'green': 'red'} text={props.showAdd? "Add +": "Close"} onClick={props.onToggle} />
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