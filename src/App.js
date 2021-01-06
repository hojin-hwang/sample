import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Script from './components/script';

const navStyle = {
  display : "flex",
  justifyContent: "space-around",
  padding : "1em",
}

function App() {
  return (
   <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/script">Script</Link>
      </nav>
      <Switch>
          {/*추천하지 않는다 */}
          <Route path={['/','/home']} exact component = {Home}> 
          </Route>

          {/*자식요소로 넘겨주고 자식요소에서 useHistory push를 사용하자*/}
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/script">
            <Script />
          </Route>
        </Switch>
   </BrowserRouter>
  );
}

export default App;
