import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Auth.css";
import AuthContext from "../../context/Auth/AuthContext";

function Auth() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext);

  const register = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        "An unexpected error occurred."; // A fallback message.

      toast.error(errorMessage);
    }
  };

  const login = async () => {
    // Use a try...catch block to handle API call results.
    try {
      // This part runs ONLY if the API call is successful (status 2xx).
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Show success toast with the message from the successful response.
      setUser(true); // Assuming this sets the user state to logged in
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // This part runs ONLY if the API call fails.
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        "An unexpected error occurred."; // A fallback message.

      // Show an error toast with the message from the backend.
      toast.error(errorMessage);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoginView ? login() : register();
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    // Reset form data when toggling
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>{isLoginView ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginView && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLoginView ? "Login" : "Create Account"}
          </button>
        </form>
        <button onClick={toggleView} className="toggle-btn">
          {isLoginView ? "Need an account? Register" : "Have an account? Login"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
