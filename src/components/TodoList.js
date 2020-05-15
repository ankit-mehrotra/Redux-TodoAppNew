import React from 'react';
import { ListGroup,ListGroupItemText } from 'reactstrap';
export const TodoList = ({todos,removeTodo,toogleTodo}) => {
   return (
       <ListGroup>
           {todos.length >0 ? 
           todos.map((todo,index) => <ListGroupItemText  style={{textDecoration: todo.isCompleted ? 'line-through': 'none' }} onClick={toogleTodo.bind(null,todo.id)} key={todo.id}>{todo.value}&nbsp;&nbsp;<span style={{color:'red'}} onClick={() => removeTodo(todo.id)}>x</span></ListGroupItemText>) : 'No Todo to show'}
       </ListGroup>
   )
}