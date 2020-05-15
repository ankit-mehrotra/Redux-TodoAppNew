
import { VisibilityFilters, toogleTodo } from '../actions';
import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';

const getVisibileTodoList = (todos,filter) =>  {
        switch(filter) {
            case VisibilityFilters.SHOW_ALL:
              return todos
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.isCompleted)
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.isCompleted)
            default:
                throw new Error('Unkonwn Filter :' + filter) 
        }
    }

const mapStateToProps = (state) => ({
    todos: getVisibileTodoList(state.todos,state.visibilityFilter)
})

const mapDispatchToProps = disptach => ({
    toogleTodo : (id) => disptach(toogleTodo(id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)