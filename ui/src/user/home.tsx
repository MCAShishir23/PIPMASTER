import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style/home.css";
import { UserContext } from "./userContext";
// Dummy components for demonstration
const Profile = () => <h3>User Profile</h3>;
const Settings = () => <h3>User Settings</h3>;
const Logout = () => <h3>Logout</h3>;

const HomePage = () => {
  const context = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("profile");
  const user = context?.user;
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    console.log("User updated:", user); // Logs when the user is updated
  }, [user]);
  return (
    <div className="welcome-container">
      <h2>{`Welcome, ${user?.username}!`}</h2>
      <div className="tabs">
        <Link
          to="/profile"
          className={`tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className={`tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => handleTabClick("settings")}
        >
          Settings
        </Link>
        <Link
          to="/logout"
          className={`tab ${activeTab === "logout" ? "active" : ""}`}
          onClick={() => handleTabClick("logout")}
        >
          Logout
        </Link>
      </div>

      <div className="tab-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};
export default HomePage;
