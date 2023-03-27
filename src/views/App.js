
import '../styles/App.scss';

import Nav from './nav/Nav';
import Home from './homepage/Home';
import MetaTags from 'react-meta-tags';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import User from './user/User';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Project from './contact/Project';
function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>Bất Động Sản</title>

      </MetaTags>

      <header className="App-header">
        <Nav />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/user" exact component={User} />
            <Route path="/project" exact component={Project} />
          </Switch>
        </Router>


      </header>
    </div>
  );
}

export default App;
