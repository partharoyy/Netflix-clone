import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import LoginScreen from "./screens/LoginScreen";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App bg-[#111]">
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <Homescreen />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
