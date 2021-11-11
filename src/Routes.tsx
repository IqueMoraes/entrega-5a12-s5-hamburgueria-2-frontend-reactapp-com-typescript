import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Comments } from "./Components/Comments";
import { Homepage } from "./Pages/Homepage";
import { SignIn } from "./Pages/Signin";
import { SignUp } from "./Pages/Signup";
// import { useUser } from "./Providers/User";

export const Routes = () => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const mylocalstorage = localStorage.getItem("@GastrobarToken");
    console.log(mylocalstorage);
    if (mylocalstorage) {
      console.log("passei na veri");
      setToken(mylocalstorage);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        {token === "" ? <Redirect to="/signin" /> : <Homepage />}
      </Route>
      <Route path="/signin">
        {token === "" ? <SignIn /> : <Redirect to="/" />}
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>
    </Switch>
  );
};
