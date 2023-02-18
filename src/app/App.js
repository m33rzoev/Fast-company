import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App;
