import "./Signin.css";
import Showpassword from "../../assets/show password.png";

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

          <button type="submit">Sign in</button>
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
        <div className="content">
            <h2>Bring Your Business Online</h2>
            <p>Create a Salesunbox account and set up an online store for your business with very little effort</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
