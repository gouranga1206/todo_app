import { Link } from "react-router-dom";

const ActiveTodo: React.FC = () => {
  return (
    <div id="main">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Create</Link>
          </li>
          <li>
            <Link to="/active" className="active">
              Active
            </Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
      </div>
      <h3>Active To-Do:</h3>
      <div className="todo-list">
        <ul>
          <li>
            <label htmlFor="todo">This is a To-Do</label>
          </li>
          <li>
            <label htmlFor="todo">This is a To-Do</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActiveTodo;
