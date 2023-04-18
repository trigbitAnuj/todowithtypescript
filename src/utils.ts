import { Todo } from "./model";


export const getActiveTodosFromLocalStorage = ():Todo[] => {
  let todosList: Todo[] = JSON.parse(localStorage.getItem("activeTodos")||'[]');

    return todosList;
 
  
};

export const getCompletedTodosFromLocalStorage = () => {
  let todosList:Todo[] = JSON.parse(localStorage.getItem("completedTodos")||'[]');
  
    return todosList;
  
};
