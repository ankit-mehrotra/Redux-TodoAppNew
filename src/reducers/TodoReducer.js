
const TodoReducer = (state= [],action) => { console.log(action);
    switch(action.type) {
        case 'ADD_TODO': 
          return [...state,{id:action.payload.id,value: action.payload.value,isCompleted:false}]
        // case 'REMOVE_TODO':
        //     return [...state,{state.filter(todo => todo.id !== action.payload.id)}]
        case 'TOGGLE_TODO': 
           return state.map(todo => (todo.id === action.payload) ? {...todo,isCompleted:!todo.isCompleted}:todo)
        default :
        return state;
    }
}

export default TodoReducer;