import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
   <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
          {/*추천하지 않는다 */}
          <Route path={['/','/home']} exact component = {Home}> 
          </Route>

          {/*자식요소로 넘겨주고 자식요소에서 useHistory push를 사용하자*/}
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
   </BrowserRouter>
  );
}

export default App;
