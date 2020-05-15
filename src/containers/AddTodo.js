import React,{ useState } from 'react';
import { InputGroup, Input,Button } from 'reactstrap';
import { addTodo,removeTodo } from '../actions';
import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import {v4 as uuid} from 'uuid';

const TodoContainer = (props) => {
    const [value,setValue] = useState('');
    return (
        <>
        <h3>Add Todo</h3>
        <InputGroup >
         <Input type="text" name="todo" value={value} onChange={e=> setValue(e.target.value)}/>
         <Button onClick={() => { props.addTodo({value,id:uuid(),isCompleted: false }); setValue('')}}>AddTodo</Button>
        </InputGroup>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (input) => dispatch(addTodo(input)),
        removeTodo: (id) => dispatch(removeTodo(id))
    }
}
export default connect(null,mapDispatchToProps)(TodoContainer);