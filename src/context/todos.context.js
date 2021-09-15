import React, { createContext } from 'react';

const defaultTodos = [
    {id: 1, task:'Mow the lawn using goats' , completed: true},
    {id: 2, task:'Release ladybugs into the garden' , completed: false}
]
const TodosContext = createContext();
const TodosContextProvider = props => {
    return (
        <TodosContextProvider>
            {props.children}
        </TodosContextProvider>
    )
}
export { TodosContext, TodosContextProvider };