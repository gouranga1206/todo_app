
import {Routes,Route} from "react-router-dom";
import CreateTodo from "./component/CreateTodo";
import ActiveTodo from "./component/ActiveTodo";
import CompletedTodo from "./component/CompleteTodo";

const App : React.FC = ()=>{
  return (
    <Routes>
      <Route path="/" element={<CreateTodo />}/>
      <Route path="/active" element={<ActiveTodo />}/>
      <Route path="/completed" element={<CompletedTodo />}/>
    </Routes>
  )
}

export default App;