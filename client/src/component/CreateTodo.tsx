import "../Style/CreateTodoStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const CreateTodo: React.FC = () => {

  //const {todo,setTodo} = useState(" ");

    interface TodoInfo {
      id : number
      text : string
    }

  return (

      <div id="main">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="active">
                Create
              </Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="input">
            <input
              type="text"
              name="todo_entry"
              id="todo_entry"
              placeholder="Enter Your To-Do"
            />
            <button type="submit" id="add_todo">
              Add
            </button>
          </div>
          <h3>Today's Todo:</h3>
          <div className="todo-list">
            <ul>
              <li>
                <input type="checkbox" />
                <label htmlFor="todo">This is a To-Do</label>
                <span className="edit">edit</span>
                <span className="delete">delete</span>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="todo">This is a To-Do</label>
                <span className="edit">edit</span>
                <span className="delete">delete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
};
export default CreateTodo;


