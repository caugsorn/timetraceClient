import "./App.css";
import Router from "./routes/Router";
import {LogContextProvider} from "./contexts/LogContext";

function App() {
  return(
  <LogContextProvider>
  <Router />;
  </LogContextProvider>)
}

export default App;
