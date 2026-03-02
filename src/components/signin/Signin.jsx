import "./Signin.css";
import Showpassword from "../../assets/show password.png";
import { Link } from "react-router-dom";

const Signin = () => {

  return (
    <div className="sign-in-con">
      {/* Section 1 */}
      <form action="">
        <div className="sign-in">
          <div className="header">
            <h2>Welcome Back!</h2>
            <div className="deials">
              <p className="p-1">Don’t have any account yet?</p>
              <p className="p-2">Sign-up</p>
            </div>
          </div>

          <div className="form-in">
            <div className="fill">
              <div className="sign-up-email">
                <p>Email</p>
                <input type="text" placeholder="Email" />
              </div>
              <div className="sign-up-password">
                <p>Password</p>
                <div className="input">
                  <input type="password" placeholder="Password" />
                  <img src={Showpassword} alt="" />
                </div>
              </div>
            </div>
            <div className="remeer">
              <div className="div-1">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p className="forgot-password">Forgot Password</p>
            </div>
          </div>

          <Link to="mainpage"><button type="submit">Sign in
            <div className="spinner"></div>
            </button></Link>
        </div>
      </form>
      {/* Section 1 end */}

      {/* Section 2 */}
      <div className="animation">
        <div className="slider">
            <div className="slider-1"></div>
            <div className="slider-2"></div>
            <div className="slider-3"></div>
        </div>
        <div className="contents">
          <div className="slides">
            <div className="content text">
            <h2 className="h2">Bring Your Business Online</h2>
            <p>Create a Salesunbox account and set up an online store for your business with very little effort</p>
        </div>
        <div className="content text">
            <h2>Keep Records and View Analytics</h2>
            <p>Track the progress of your online business using real time statistics recorded in the app</p>
        </div>
        <div className="content text">
            <h2>Communicate With Your Customers</h2>
            <p>Send emails and messages to your customers and let them know what you have in store for them</p>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Signin;
