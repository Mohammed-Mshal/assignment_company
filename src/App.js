import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
