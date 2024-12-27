import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./user/userContext";
import Login from "./user/login";
import PostsList from "./posts/postList";
import FriendsList from "./requests/friendList";
import Register from "./user/register";
import HomePage from "./user/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const mockFriends: any = [];
const mockSendRequest = () => {};
root.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/posts" element={<PostsList />} />
        <Route
          path="/friends"
          element={
            <FriendsList
              friends={mockFriends}
              handleSendRequest={mockSendRequest}
            />
          }
        />
      </Routes>
    </Router>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
