import './App.css';
// import './assets/css/custom.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from 'Pages/Signup';
import Dashboard from 'Pages/Dashboard';
import Login from 'Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route
              path="signup"
              element={<Signup />}
            />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
