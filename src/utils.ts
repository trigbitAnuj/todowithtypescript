import { Todo } from "./pages/TodoApp";

export const getActiveTodosFromLocalStorage = ():Todo[] => {
  let todosList: Todo[] = JSON.parse(localStorage.getItem("activeTodos")||'[]');
  if (todosList) {
    return todosList;
  } else {
    return [];
  }
};

export const getCompletedTodosFromLocalStorage = () => {
  let todosList:Todo[] = JSON.parse(localStorage.getItem("completedTodos")||'[]');
  if (todosList) {
    return todosList;
  } else {
    return [];
  }
};
