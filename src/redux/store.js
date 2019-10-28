import {createStore} from 'redux';
import todosReducer from './todosReducer'; //Access to the reducers



// create the store (each store needs a minimum of 1 reducer)
 var store = createStore(todosReducer);
//  console.log(store.getState())


var action1 = {
    type: 'ADD_TODO',
    payload:{
        id: 4,
        content: 'study react',
        priority: 'high'
    }
}
store.dispatch(action1)

var action2 = {
    type: 'REMOVE_TODO',
    payload:2
}

store.dispatch(action2)

var action3 = {
    type: 'ADD_TODO',
    payload:{
        id: 6,
        content: 'testing react',
        priority: 'high'
    }
}

store.dispatch(action3)

console.log(store.getState())

 export default store
