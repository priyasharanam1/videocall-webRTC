import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LobbyScreen />} />
          {/* <Route path="/room/:roomId" element={<h1>Hey there</h1>} /> */}
        </Routes>
    </div>
  );
}

export default App;
