import React, { useEffect, useState } from 'react'
import AddTodo from '../components/AddTodo'
import TodoLists from '../components/TodoLists';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { getActiveTodosFromLocalStorage, getCompletedTodosFromLocalStorage } from '../utils';

 export type Todo={
    id:number;
    text:string;
    isDone:boolean;
}






const TodoApp = () => {

    
    const [todos, setTodos] = useState<Todo[]>(getActiveTodosFromLocalStorage());
    const [completedTodos,setCompletedTodos]=useState<Todo[]>(getCompletedTodosFromLocalStorage())



const handleAddTodo= (text:string)=>{
    if(text){
        setTodos([...todos,{id:Date.now(),text:text,isDone:false}])
    }
    console.log(todos)
   
}
 const handleDeleteTodo=(id:number)=>{
    setTodos((todos)=>todos.filter((todo)=>todo.id!==id))

}
const handleChangeTodo=(id:number)=>{
    
    setTodos((todos)=>todos.map(todo=> todo.id===id?{...todo,isDone:!todo.isDone}:todo))

}

const handleCompleteChangeTodo= (id:number)=>{
    setCompletedTodos((completedTodos)=>completedTodos.map(todo=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    
  }
  const handleCompleteDeleteTodo= (id:number)=>{
    setCompletedTodos((completedTodos)=>completedTodos.filter((todo)=>todo.id!==id))
    
  }






const dragEnd=(result:DropResult)=>{
    console.log(result)
   
    let add;
    let active=todos;
    let complete=completedTodos;
  const {source,destination}=result;
if(!destination){
    return null;
}
if(destination.droppableId ===source.droppableId &&destination.index===source.index) return null;

if(source.droppableId==="todos-list"){
   add=active[source.index]
   active.splice(source.index,1)
}
else{
    add=complete[source.index]
    complete.splice(source.index,1)
}

if(destination.droppableId ==="todos-list"){
    active.splice(destination.index,1,add)
}
else{
    complete.splice(destination.index,1,add)
}
setTodos([...active])
setCompletedTodos([...complete])

}

useEffect(()=>{
    localStorage.setItem("activeTodos",JSON.stringify(todos))
    localStorage.setItem("completedTodos",JSON.stringify(completedTodos))

},[todos])




  return (
    <DragDropContext onDragEnd={dragEnd}>
 <section className="m-4 p-2">
   <h1 className="text-center text-4xl font-bold my-8">Todos</h1>
   <AddTodo handleAddTodo={handleAddTodo}/>
   <TodoLists todos={todos} handleDeleteTodo={handleDeleteTodo} handleChangeTodo={handleChangeTodo} completedTodos={completedTodos} handleCompleteChangeTodo={handleCompleteChangeTodo} handleCompleteDeleteTodo={handleCompleteDeleteTodo} />
  
   </section>
    </DragDropContext>
  
  )
}

export default TodoApp;