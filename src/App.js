
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SkillProviderList from "./pages/SkillProviderList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "./pages/History";
import User from "./pages/Users";
import { useState } from "react";
import Setting from "./pages/Setting";
import UserProfile from "./pages/UserProfile";
import SkillProviderProfile from "./pages/SkillProviderProfile";
import Error from "./pages/Error_page";

function App() {
  const [authorized] = useState(true);
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

        <Route  path="/UserProfile" element={<UserProfile />} />
        <Route
          
          path="/SkillProviderProfile"
          element={<SkillProviderProfile />}
        />
        <Route path="/Error" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
