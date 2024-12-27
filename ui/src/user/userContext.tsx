import React, { createContext, useContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import a spinner component
import { loginUser, registerUser } from "../services/service";
import "./style/userContext.css";
export default interface UserContextType {
  setUser: (values: any) => void;
  user: UserResponseData;
  setIsLoading: (values: any) => void;
}
export const UserContext = createContext<UserContextType | null>(null);
export type UserResponseData = {
  name: string;
  email: string;
  password: string;
  username: string;
  userId: string;
  // age?: number;
  // role?: string;
};

export const UserProvider = ({ children }: any): JSX.Element => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    userId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <UserContext.Provider value={{ setIsLoading, setUser, user }}>
      {isLoading ? (
        <div className="spinner-position">
          <label>Loading...</label>
          <br />
          <ClipLoader color="#007bff" loading={isLoading} size={35} />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
// Custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
