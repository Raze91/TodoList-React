import React from 'react';
import './Info.css'

const Info = (props) => {

    // Compteur de tâche actives
    let count = props.Todos.reduce(function(accumulator, currentValue) {
        if(currentValue.done === false) {
            return (accumulator + 1)
        } else {
            return accumulator
        }
    },0);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={props.Filter === 'All' ? 'selected' : ''} href="#/" onClick={(e) => props.onAll(e)}>All</a>
                </li>
                <li>
                    <a href="#/active" className={props.Filter === 'Active' ? 'selected' : ''} onClick={(e) => props.onActive(e)}>Active</a>
                </li>
                <li>
                    <a href="#/completed" className={props.Filter === 'Completed' ? 'selected' : ''} onClick={(e) => props.onCompleted(e)}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={(e) => props.onClearCompleted(e, props.Todos.done)}>Clear completed</button>
        </footer>
    )
}

export default Info;