import { useState } from "react";
import TodoList from "../component/TodoList";

function ToDoPage(){
    const initTodoLists = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        }
    ]
    const [todoLists, setTodoLists] = useState(initTodoLists)
    
    const handleClickItem = (todo: any, index: number) => {
      const newTodoList = [...todoLists];
      newTodoList[index] = {
        ...newTodoList[index],
        status: newTodoList[index].status === 'new' ? 'completed' : 'new'
      };
      setTodoLists(newTodoList)
      console.log(todo, index);
      // You can call the parent component's function here if needed
      // Example: onTodoClick(todo, index);
    };
  return (
    <div>
      <TodoList todoLists={todoLists} onTodoClick={handleClickItem}/>
    </div>
  );
}

export default ToDoPage;