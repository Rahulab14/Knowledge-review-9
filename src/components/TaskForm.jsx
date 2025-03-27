// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.
import React from "react";
import './Taskform.css';
import { Link } from "react-router-dom";



export default function TaskForm() {
    return (
        <div>

            <form className="Box" >
                <div>
                    <label htmlFor="">Title</label>
                    <input type="string" required />
                </div>
                <div>
                    <label htmlFor="">DueDate</label>
                    <input type="date" required />
                </div>
                <div>
                    <label htmlFor="">Priority</label>
                    <select name="medium" id="">se
                        
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                    </select>

                </div>
                <div>
                    <label htmlFor="">Status</label>
                    <select name="To Do" id="">
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <Link to='/'><button className="back">Back</button> </Link>
                </div>

            </form>
        </div>
    );
}






