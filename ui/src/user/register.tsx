import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style/register.css";
import * as Yup from "yup"; // For validation
import { UserContext, useUserContext } from "./userContext";
import { registerUser } from "../services/service";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string()
    .min(6, "User Name must be at least 6 characters")
    .required("User Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
export type UserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  age?: number;
  role?: string;
};
const RegisterForm = () => {
  const context = useUserContext();
  const navigate = useNavigate();
  const initialValues: UserData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    role: "",
  };

  const handleSubmit = async (values: any) => {
    context.setIsLoading(true);
    try {
      const response: any = await registerUser(values);
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

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="error" />
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

            {/* Confirm Password Field */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            {/* Age Field */}
            <div className="form-group">
              <label htmlFor="name">Age</label>
              <Field
                type="number"
                id="age"
                name="age"
                className="form-control"
                placeholder="Enter your age"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            {/* Role Field */}
            <div className="form-group">
              <label htmlFor="name">Role</label>
              <Field
                type="text"
                id="role"
                name="role"
                className="form-control"
                placeholder="Enter your role"
              />
              <ErrorMessage name="role" component="div" className="error" />
            </div>

            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="name">User Name</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
