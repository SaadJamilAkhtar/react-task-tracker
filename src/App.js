import {useState} from "react";
import Header from './components/Header'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Delete Task

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    // toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    // add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000 + 1)
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    // toggleForm

    const toggleForm = () => setShowForm(!showForm);
    return (
        <div className="container">
            <Header onToggle={toggleForm} showAdd={!showForm}/>
            {showForm && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks To Show')}
        </div>
    );
}

export default App;
