import { Link } from "react-router-dom";
const CompleteTodo: React.FC = () => {
  return (
    <div id="main">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Create</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
          <li>
            <Link to="/completed" className="active">
              Completed
            </Link>
          </li>
        </ul>
      </div>
      <h3>Completed To-Do:</h3>
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

export default CompleteTodo;
