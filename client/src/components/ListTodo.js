import React from 'react';
import {toBoolean} from './../helpers/helpers'

const ListTodo = ({ todos, deleteTodo }) => {
  
  function statusImage(isFinished) {
    return toBoolean(isFinished) ? './../done.png' : './../in_progress_1.gif';
  }
  
  function imageStatusClassName(isFinished) {
    return toBoolean(isFinished) ? 'done' : 'inProgress';
  }

  return (
    <ul>
      <li>
        <div className="task">
          <h4>Task</h4>
        </div>
        <div className="status">
          <h4>Satus</h4>
        </div>
      </li>
      { todos && todos.length >= 0 ?
            (
              todos.map(
                todo =>
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
                    <div className="task">
                      {todo.action}
                    </div>
                    <div className="status">
                      <img src={statusImage(todo.finished)} className={imageStatusClassName(todo.finished)} alt="Task status"/>
                    </div>
                  </li> )
            )
            :
            ( <li>No todo(s) left</li> )
      }
    </ul>
  )
}

export default ListTodo