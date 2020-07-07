import React from 'react';
import './Todo.css';

const Todo = (props) => {

    let classNames = [];

    // Édition des tâches
    if(props.Todos.done !== false) {
        if(props.Editing.Edited && props.Todos.id === props.Editing.id) {
            classNames.push('editing');
        }
        classNames.push('completed')
    } else if(props.Editing.Edited && props.Todos.id === props.Editing.id){
        classNames.push('editing');
    }

    return (
        <li className={classNames.join(' ')}>
            <div className="view">
                <input className="toggle" type="checkbox" readOnly onClick={(e) => props.onCheck(e, props.Todos.id)} checked={props.Todos.done ? true : false}/>
                <label onDoubleClick={(e) => props.onDoubleClick(e, props.Todos.id)} >{props.Todos.title}</label>
                <button className="destroy" onClick={(e) => props.onDelete(e, props.Todos.id)}></button>
            </div>
            <input className="edit" defaultValue={props.Todos.title} onKeyDown={(e) => props.onEditing(e,props.Todos.id)}/>
        </li>
    )
}

export default Todo;