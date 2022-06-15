import "./App.css";
import Router from "./routes/Router";
import {LogContextProvider} from "./contexts/LogContext";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
  return(
  <LogContextProvider>
    <TaskContextProvider>
  <Router />;
  </TaskContextProvider>
  </LogContextProvider>)
}

export default App;
