import React, {useEffect, useState} from 'react';
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function Home(props) {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        const getTasks = async () => {
            setTasks(await fetchTasks())
        }
        getTasks();
    }, [])

    // fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data
    }

    // fetch task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        return data
    }


    // Delete Task

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE"
        })
        setTasks(tasks.filter((task) => task.id !== id))

    }
    // toggle reminder
    const toggleReminder = async (id) => {
        const task = await fetchTask(id);
        const updatedTask = {...task, reminder: !task.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        const data = await res.json();
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }

    // add task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const newTask = await res.json()
        setTasks([...tasks, newTask])
    }


    return (
        <>
            {props.showForm && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask}
                       onToggle={toggleReminder}/>) : ('No Tasks To Show')}
        </>
    );
}

export default Home;