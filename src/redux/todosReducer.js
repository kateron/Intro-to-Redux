/**  
    * actions need a type... payload is optional
        e.g.
        var addAction = {
            type: 'ADD_TODO',
            payload:{
                id: 4,
                content: 'study react',
                priority: 'high'
            }
        }
    * when you start the state is empty so you need to make initial state
    * reducer is accumulative (so you can undo / rollback to previous one)
    * to remove:
    *   var removeAction = {
            type: 'REMOVE_TODO',
            payload:4
        }
    * .map() and .filter() are immutable so they are safe to use as they create a NEW array
*/


// var initialState = []
var initialState = [
    {
        id:1,
        content: 'Ring Peter',
        priority: 'Important'
    },
    {
        id:2,
        content: 'Water plants',
        priority: 'Urgent'
    },
    {
        id:3,
        content: 'Get milk',
        priority: 'Can wait'
    }
]

// Create todoReducer

function todosReducer( state = initialState, action ){

    /** 
        if (action is add){
                add more to state
        } else if(action is remove){
                remove item from state
        } else {
            do nothing
        }
        * (usually documentation will tell you to use switches)
    */

    if (action.type == 'ADD_TODO'){
        // state.push(action.payload) --> this operation is not immutable (which means that if the variable changes it becomes mutable) it wants you to create a new copy of the state and edit that instead (because you can always rollback). Redux does it very effciently so you do not need to modify the state... just duplicate it then modify

        // safer way:
        // var newState = [...state, action.payload]

        return [...state,action.payload]
    } else if(action.type == 'REMOVE_TODO'){
        var id = action.payload
        return state.filter((todo) => {
            return todo.id !== id;
        })
    } else {
        return state
    }



    //return the state

}

export default todosReducer