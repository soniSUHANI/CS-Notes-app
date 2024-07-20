import { useContext } from "react";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";


const ToDoScreen = ()=>{
    const {taskList} = useContext(TaskContext);
    const navigate = useNavigate();
    
    // let addNewTask = (task) =>{
    //     setTaskList([...taskList, {...task, createdDate:new Date() }]);
    // };

    return (
        <>
        
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button
                    onClick={(e)=>{
                        navigate("/add-task");

                        // setTaskList([
                        //     ...taskList,
                        //     {
                        //         title: "Go to gym",
                        //         description: "Going to gym is good for muscle growth.",
                        //         createdDate: new Date(),
                        //     },
                        // ]);
                    }}
                    className = "ui secondary button"
                    >
                        Add Task
                </button>
                <section>
                <div className="ui cards">
                {taskList.map((task)=>(
                    <Tasks task={task} key={task.taskId}/>
                ))}
                </div>
                </section>
            </div>
            {/* <AddTask onSubmit={addNewTask}/> */}
        </div>
        </>
    );
};

export default ToDoScreen;