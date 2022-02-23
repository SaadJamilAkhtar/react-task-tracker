import React from 'react';
import Task from "./Task";


function Tasks(props) {

    return (
        <>
            {props.tasks.map((task) => {
                return (
                    <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} />
                )
            })}
        </>
    );
}

export default Tasks;