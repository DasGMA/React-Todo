// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';

const TodoList = props => {
  return (
    <div className="list">
      {props.listItem.map((item, index) => {
        let orderNumber = index + 1;
        return <div
        className={item.completed ? props.deleteTask : props.initialTask} 
        onClick={()=>props.toggleId(item.id)}
        key={item.id}>Task {orderNumber}: {item.task}</div>;
      })}
    </div>
  );
};


export default TodoList;