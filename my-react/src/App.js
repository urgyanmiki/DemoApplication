import React from 'react';
import Navbar from'./components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Comment from './components/Comment'
import NewComment from './components/NewComment'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/:post_id" component={Comment}/>
        <Route path="/newcomment" component={NewComment} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
