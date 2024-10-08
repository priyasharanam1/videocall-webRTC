import { Routes, Route } from "react-router-dom";
import { SocketProvider } from "./providers/Socket";
import Homepage from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
