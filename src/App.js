import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/assignment_company/*" element={<Main />} />
        <Route path="/*" element={<Navigate to={"/projects"} />} />
      </Routes>
    </div>
  );
}

export default App;
