import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Room } from "./components/Editor/Room";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editor/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
