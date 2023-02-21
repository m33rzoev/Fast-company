import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navBar";
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App;
