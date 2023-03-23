
const initialState = {
    todos: [
        {
            id: 1,
            title: 'do homework'
        },
        {
            id: 2,
            title: 'sport'
        }
    ]
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }]
            }
        }
        case "DELETE": {
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id !== action.id
                })
            }
        }
        case "IMPORTANT": {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, isImportant: !item.isImportant
                        }
                    }
                    return item
                })

            }
        }
        case "DONE": {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, isDone: !item.isDone
                        }
                    }
                    return item
                })
            }
        }
        case "DELETE_ALL": {
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id === action.id
                })
            }
        }


        default: return state
    }
}


export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({ type: "ADD", title })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        return dispatch({ type: "DELETE", id })
    }
}

export const isImportant = (id) => {
    return (dispatch) => {
        return dispatch({ type: "IMPORTANT", id })
    }
}

export const AllTodo = (id) => {
    return (dispatch) => {
        return dispatch({ type: "DELETE_ALL", id })
    }
}
export const DoneTodo = (id) => {
    return (dispatch) => {
        return dispatch({ type: "DONE", id })
    }
}