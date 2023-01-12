import LoginPage from "./pages/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SkillProviderList from "./pages/SkillProviderList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "./pages/History";
import User from "./pages/Users";
import { useState } from "react";
import Setting from "./pages/Setting";
import userProfile from "./pages/userProfile";
import SkillProviderProfile from "./pages/SkillProviderList";

function App() {
  const [authorized, setAuthorized] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/Dashboard"
          element={<Dashboard authorized={authorized} />}
        />
        <Route path="/SkillProviderList" element={<SkillProviderList />} />
        <Route path="/Users" element={<User />} />
        <Route path="/History" element={<History />} />
        <Route path="/Setting" element={<Setting />} />

        <Route path="/userProfile" element={<userProfile />} />
        <Route
          path="/SkillProviderProfile"
          element={<SkillProviderProfile />}
        />
      </Routes>
    </Router>
  );
}

export default App;
