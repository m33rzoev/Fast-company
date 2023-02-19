import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navBar";
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App;
