import  {  useState } from 'react'
import { AddTodoProps } from '../model';



const AddTodo = ({handleAddTodo}:AddTodoProps) => {
    const [text, setText] = useState<string>("");

    



  return (
    <section className="m-4  w-full flex justify-center">
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add todo"
        className="p-3 text-xl border-black border-2 rounded-md w-[40%] "
      />
      <button
        className=" cursor-pointer p-2 mx-2 border outline-none  bg-blue-600 rounded-md text-xl hover:bg-blue-700 "
        onClick={()=>{handleAddTodo(text)
        setText("")}}
      >
        AddTodo
      </button>

    </section>
  )
}

export default AddTodo