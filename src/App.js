import React, {Component} from 'react'
import { Router, Link } from '@reach/router'
import RouteAllTodos from './RouteAllTodos';
import RouteAddTodo from './RouteAddTodo';
import './App.css'

class  App extends Component {
  
  constructor(props){
    super(props);

  }

  render(){
    return (

      <div className="wrap">
        <div className="container">

        <Router>
          <RouteAllTodos path="/" />
          <RouteAddTodo path="add" />
        </Router>
       
        </div>
      </div>
      
    );
  }
}

export default App;






