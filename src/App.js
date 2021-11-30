import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Routes } from 'react-router';
import Home from './Component/Home/Home';
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path ="/" element ={<Home />}></Route>
      <Route path ="/home" element ={<Home />}></Route>
      <Route path ="/post/:id" element ={<PostDetails />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
