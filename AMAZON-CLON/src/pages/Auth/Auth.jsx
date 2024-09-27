import React, { useContext, useState } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../components/DataProvider/DataProvider";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../../utils/action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState({
    signIn: false,
    signUp: false,
  });
  // console.log(password);
  // console.log(email);
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setIsLoading({ ...isLoading, signIn: true });
      console.log(isLoading);
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({ ...isLoading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          console.log("The errr", err);
          setError(err.message);
          setIsLoading({ ...isLoading, signIn: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password);
      setIsLoading({ ...isLoading, signUp: true })
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({ ...isLoading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          console.log("The errr", err);
          setError(err.message);
          setIsLoading({ ...isLoading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        /> 
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} //e is a huge object and target is the current inpute and value is ...
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInButton}
          >
            {isLoading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* creat account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerButton}
        >
          {isLoading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Creat your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
