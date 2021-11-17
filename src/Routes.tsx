import { Switch, Route, Redirect } from "react-router-dom";
import { RestComments } from "./Pages/Comments";
import { Homepage } from "./Pages/Homepage";
import { SignIn } from "./Pages/Signin";
import { SignUp } from "./Pages/Signup";
import { useUser } from "./Providers/User";

export const Routes = () => {
  const { authToken } = useUser();

  return (
    <Switch>
      <Route exact path="/">
        <RestComments />
      </Route>
      <Route path="/signin">
        {!!authToken ? <Redirect to="/homepage" /> : <SignIn />}
      </Route>
      <Route path="/signup">
        {!!authToken ? <Redirect to="/homepage" /> : <SignUp />}
      </Route>
      <Route path="/homepage">
        <Homepage />
      </Route>
    </Switch>
  );
};
