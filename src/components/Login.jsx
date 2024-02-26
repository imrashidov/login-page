import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <div className="background">
      <div className="login">
        <div className="w-full">
          <div className="mx-28">
            <h1 className="login-title">Login</h1>
            <p className="login-alt">Welcome back!</p>
          </div>
          <div>
            <form className="login-form">
              <div className="login-container">
                <FaUser className="login-icon" />
                <input
                  placeholder="Username"
                  type="text"
                  className="login-input"
                />
              </div>
              <div className="login-container">
                <FaLock className="login-icon" />
                <input
                  placeholder="Password"
                  type="password"
                  className="login-input"
                />
              </div>
              <div className="login-buttons">
                <button className="btn-login">Login</button>
                <button className="btn-register">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
