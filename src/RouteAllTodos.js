import React, {Component} from 'react';
import Todo from './Todo';
import { Router, Link, navigate } from '@reach/router'
import {connect} from 'react-redux';



class  RouteAllTodos extends Component {
  
  constructor(props){
    super(props);
  }



  render(){
    return (
          <div className="todos">
            {
              this.props.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id,
                  
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            
            <Link to="/add">Add new todo</Link>
          </div>
    );
  }
}

function mapStateToProps(state){
  return {todos:state}

}

export default connect(mapStateToProps)(RouteAllTodos);






