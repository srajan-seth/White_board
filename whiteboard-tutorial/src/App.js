import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import Board from "./components/Board";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";

function HomePage() {
  const { id } = useParams(); // Get the dynamic id
  return (
    <ToolboxProvider>
      <div className="app-container">
        <Toaster />
        <Toolbar />
        <Board id={id}/>
        <Toolbox />
        <Sidebar /> 
      </div>
    </ToolboxProvider>
  );
}

function App() {
  return (
    <BoardProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} /> 
        </Routes>
      </Router>
    </BoardProvider>
  );
}

export default App;
