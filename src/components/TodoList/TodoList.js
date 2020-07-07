import React from 'react';
import './TodoList.css'
import Todo from '../Todo/Todo'

const TodoList = (props) => {

        // Tableau des tâches filtrés
    let filteredTodos = [];

        // Affiche toute les tâches
    if (props.Filter === 'All') {
        filteredTodos = props.Todos;

        // Affiche les tâches actives
    } else if (props.Filter === 'Active') {
        filteredTodos = props.Todos.filter(todo => todo.done === false);
    
        // Affiche les tâches complétées
    } else if (props.Filter === 'Completed') {
        filteredTodos = props.Todos.filter(todo => todo.done === true)
    }

    return (
        <ul className="todo-list">

            {filteredTodos.map((todo) => (
                <Todo Todos={todo} Editing={props.Editing} onEditing={props.onEditing} onCheck={props.onCheck} onDelete={props.onDelete} onDoubleClick={props.onDoubleClick}
                    key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;