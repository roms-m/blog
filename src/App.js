import TopBar from './components/topbar/topbar';
import Single from './components/pages/single/single'
import Post from './components/post/post';
import Write from './components/pages/write/write';
import Settings from './components/pages/settings/settings';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';
import Home from './components/pages/home/home';
import { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import { Context } from './context/contex';


function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
