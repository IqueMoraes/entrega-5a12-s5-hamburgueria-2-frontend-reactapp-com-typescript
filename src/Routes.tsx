import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { Comments } from "./Pages/Comments";
import { Homepage } from "./Pages/Homepage";
import { SignIn } from "./Pages/Signin";
import { SignUp } from "./Pages/Signup";

export const Routes = () => {

    return (
        <Switch>
            <GlobalStyle/>
            <Route exact path="/">
                <div>
                    Oi
                </div>
               <Homepage/>
            </Route>
            <Route path="/signin">
                <div> login</div>
                <SignIn/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/comments">
                <Comments/>
            </Route>
        </Switch>
    )
}