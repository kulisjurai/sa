import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import NavBar from "./components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Reports from "./Pages/Reports/Reports";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Team from "./Pages/Team/Team";
import Support from "./Pages/Support/Support";
import { GeneralContext } from "./contexts/GeneralContext";
import "./App.css";

function App() {
  const { user } = useContext(GeneralContext);

  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/reports" element={user ? <Reports /> : <Login />} />
          <Route path="/team" element={user ? <Team /> : <Login />} />
          <Route path="/support" element={user ? <Support /> : <Login />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
