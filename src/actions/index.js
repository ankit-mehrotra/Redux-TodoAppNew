export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}

export const toogleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}
export const setVisibilityFilter = (filter) =>({
    type: 'SET_VISIBILITY_FILTER',
    payload: filter

});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}