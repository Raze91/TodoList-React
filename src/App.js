import React, { useState } from 'react';
import './App.css';

import TodoList from './components/TodoList/TodoList'
import Info from './components/Info/Info'
const uniqid = require('uniqid');

function App() {

  // Tableau des tâches 
  const [Todos, setTodos] = useState([
    { title: "todo 1", done: false, id: uniqid() },
    { title: "todo 2", done: true, id: uniqid() },
    { title: "todo 3", done: false, id: uniqid() }
  ]);

  // Booléan pour gérer l'édition
  const [Editing, setEditing] = useState({ Edited: false, id: '' });

  // State por gérer le filtrage des tâches
  const [Filter, setFilter] = useState('All');

  // Création de tâche
  const onKey = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setTodos([{ title: event.target.value, done: false, id: uniqid() }, ...Todos]);
      event.target.value = '';
    }
  }

  // Cocher les tâches
  const onCheck = (e, todoId) => {
    setTodos(
      Todos.map((todo) => {
        if (todo.id === todoId) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  // Suppresion de tâche
  const onDelete = (e, todoId) => {
    Todos.map((todo) => {
      if (todo.id === todoId) {
        setTodos(Todos.filter(todo => todo.id !== todoId))
      }
      return todo;
    })
  }

  // Cocher / Décocher toute les tâches
  const onToggle = (e) => {
    setTodos(
      Todos.map((todo) => {
        todo.done = e.target.checked;

        return todo;
      })
    )
  }

  // Supprimer les tâches terminées
  const onClearCompleted = (_done) => {
    Todos.map((todo) => {
      setTodos(Todos.filter(todo => todo.done === false))

      return todo;
    })
  }

  // Éditer une tâche
  const onDoubleClick = (e, todoId) => {
    Todos.map((todo) => {
      if (todo.id === todoId) {
        setEditing({ Edited: true, id: todoId });

      }
      return todo;
    })
  }

  // Valider l'édtion de la tâche
  const onEditing = (e, todoId) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setEditing({ Edited: false, id: todoId })
      Todos.map((todo => {
        if (todo.id === todoId) {
          todo.title = e.target.value;
        }
        return todo;
      }))
    }
  }

  // Change le state filtrage pour 'Tout'
  const onAll = (e) => {
    setFilter('All');
  }

  // Change le state filtrage pour 'Active'
  const onActive = (e) => {
    setFilter('Active');
  }

  // Change le state de filtrage pour 'Complétées'
  const onCompleted = (e) => {
    setFilter('Completed');
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={(e) => onKey(e)} />
      </header>
      {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onClick={(e) => onToggle(e)} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList Todos={Todos} setTodos={setTodos} Editing={Editing} Filter={Filter} onEditing={onEditing} onCheck={onCheck} onDelete={onDelete} onDoubleClick={onDoubleClick} />
      </section>
      {/* <!-- This footer should hidden by default and shown when there are todos --> */}
      <Info Todos={Todos} Filter={Filter} onClearCompleted={onClearCompleted} onAll={onAll} onActive={onActive} onCompleted={onCompleted} />
    </section>
  );
}

export default App;
