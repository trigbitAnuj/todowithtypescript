export type Todo={
    id:number;
    text:string;
    isDone:boolean;
}
export type AddTodoProps={
    handleAddTodo:(text:string)=>void ;
}

export type Props={
    todos: Todo[],
    handleChangeTodo:(id:number)=>void;
    handleDeleteTodo:(id:number)=>void;
    handleCompleteChangeTodo:(id:number)=>void 
    handleCompleteDeleteTodo:(id:number)=>void
    completedTodos:Todo[]
    
  }
  
  export type SingleTodoProps ={
    key:number
    index:number
    todo:Todo
    handleChangeTodo:(id:number)=>void
    
    handleDeleteTodo:(id:number)=>void
  
    
  }