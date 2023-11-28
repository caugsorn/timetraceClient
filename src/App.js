import "./App.css";
import Router from "./routes/Router";
import { LogContextProvider } from "./contexts/LogContext";
import { TaskContextProvider } from "./contexts/TaskContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <LogContextProvider>
        <TaskContextProvider>
          <Router />;
        </TaskContextProvider>
      </LogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
