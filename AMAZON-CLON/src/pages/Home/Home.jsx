import React, { useContext, useEffect } from "react";
import Routering from "../Router";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../utils/action.type";
import { auth } from "../../utils/firebase";
function Home() {
  const [{ user }, dispathc] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispathc({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispathc({
          type: Type.SET_USER,
          user: null, //if the user is null the signin came on the top whicn is a condition when the "user is not works"
        });
      }
    });
  }, []);//this uses to maintain the state on the inital render.
  return (
    <>
      <Routering />
    </>
  );
}

export default Home;
