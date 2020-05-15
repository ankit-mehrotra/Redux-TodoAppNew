import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/VisibileTodoList'
import { Footer } from './Footer'

export const TodoApp = () => {
    return (
        <>
           <AddTodo/>
           <TodoList/>
           <Footer/> 
        </>
    )
}
