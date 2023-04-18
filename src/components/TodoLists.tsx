import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Props, SingleTodoProps } from "../model";







const TodoLists = ({todos,handleChangeTodo,handleDeleteTodo,completedTodos,handleCompleteChangeTodo,handleCompleteDeleteTodo}:Props)=> {

  
  return (
    <section className=" flex  w-full mt-4 justify-between gap-2">

      <Droppable droppableId="todos-list">
        {(provided) => (
          <section
            className="flex flex-col  bg-teal-300 p-[10px] w-[50%]  rounded-lg gap-2 "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="text-3xl text-white font-serif text-center">
              Active Todos
            </h1>

            {todos.map((todo, index) => (
              // <li>{todo.text}</li>
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                handleChangeTodo={handleChangeTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))}

            {provided.placeholder}
          </section>
        )}
      </Droppable>

       <Droppable droppableId="Todos-remove">
        {(provided) => (
          <section
            className="flex flex-col bg-red-400 w-[50%]    rounded-lg p-[10px]  gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="text-3xl font-serif text-white text-center">
              Completed Todos
            </h1>

            {completedTodos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                handleChangeTodo={handleCompleteChangeTodo}
                handleDeleteTodo={handleCompleteDeleteTodo}
              />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable> 
    </section>
  );
};

export default TodoLists;


const  SingleTodo=({ todo, handleDeleteTodo, handleChangeTodo, index }:SingleTodoProps) =>{
 return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div className="flex rounded-md  justify-between  mt-3  p-[15px] bg-gray-400 hover:scale-[1.01]"
       {...provided.dragHandleProps}
       {...provided.draggableProps}
       ref={provided.innerRef}
        >
         
           {todo.isDone ? (
            <s className="text-2xl font-light">{todo.text}</s>
          ) : (
             <span className="text-2xl">{todo.text}</span>
          )}

          <section className="flex ">
            <button               className="cursor-pointer ml-3 text-xl"
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
             >
               <AiFillDelete />
             </button>
            <button
               className="cursor-pointer ml-3 text-xl"
              onClick={() => {
               
                handleChangeTodo(todo.id);
              }}
            >
              <MdDone />
            </button>
          </section>
        </div>
      )}
    </Draggable>
  );
}