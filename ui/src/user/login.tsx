import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import "./style/login.css";
import { loginUser } from "../services/service";
import { UserContext, useUserContext } from "./userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const context = useUserContext();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const { user } = context;
  const handleSubmit = async (credentials: any) => {
    context.setIsLoading(true);
    try {
      console.log("Form Data", credentials);
      const response: any = await loginUser(credentials);
      context.setIsLoading(false);
      if (response.status === 200) {
        context.setUser(response.data);
        navigate("/home");
      } else {
        alert("Unauthorized");
      }
    } catch (error) {
      context.setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("User updated:", user); // Logs when the user is updated
  }, [user]);
  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* username Field */}
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <Field
                type="username"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Loader or Submit Button */}
            <div className="form-group">
              {isSubmitting ? (
                <ClipLoader color="#007bff" loading={isSubmitting} size={35} />
              ) : (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
