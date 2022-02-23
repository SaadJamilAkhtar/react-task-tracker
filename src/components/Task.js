import React from 'react';
import {FaTimes} from "react-icons/fa";

function Task(props) {
    return (
        <div className={`task ${props.task.reminder? 'reminder': ''}`} onDoubleClick={() => props.onToggle(props.task.id)} >
            <h3>{props.task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}}
                                           onClick={() => props.onDelete(props.task.id)}/></h3>
            <p>{props.task.day}</p>
        </div>
    );
}

export default Task;