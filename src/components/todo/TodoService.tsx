/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  dueDate: string;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    setTodoState((prevState) =>
      prevState.map((todo, index) => ({ ...todo, id: index }))
    );
  };

  const toggleTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState
        .filter((todo: Itodo) => todo.id !== id)
        .map((todo, index) => ({ ...todo, id: index }))
    );
    setNextIdState((prev) => prev - 1);
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem('todos');

    if (data === undefined) data = '';
    initialTodos = JSON.parse(data!);

    initialTodos.map((list) =>
      list.id === nextIdState ? incrementNextId() : nextIdState
    );

    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
