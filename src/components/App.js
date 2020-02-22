import React from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="container">
      <div className="well">
        <div className="title">:: Todolist App</div>
      </div>
      <div className="panel panel-default panel-borderless">
        <div className="panel-body">
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
