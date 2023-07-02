import Task from "./Task"

/* const tasks = [
    {
        id: 1,
        text: "PTM",
        day: 'Feb 12 at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: "Assignment due",
        day: 'Feb 1 at 12:00am',
        reminder: false
    },
    {
        id: 3,
        text: "shopping",
        day: 'Feb 5 at 5pm',
        reminder: true
    }
]; */



const Tasks = ({tasks,onDelete,onToggle}) => {
/* 
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "PTM",
            day: 'Feb 12 at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: "Assignment due",
            day: 'Feb 1 at 12:00am',
            reminder: false
        },
        {
            id: 3,
            text: "shopping",
            day: 'Feb 5 at 5pm',
            reminder: true
        }
    ]) */
    return (
        //WE CAN SETTASKS
        <>
            {tasks.map((task) => (
                // {/* <h3 key={task.id}>{task.text}</h3> */}
                <Task key={task.id}  task={task} onDelete={onDelete} onToggle={onToggle}/>
            )
            )}
        </>
    )
}

export default Tasks