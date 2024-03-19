
// interface TodoListProps {
//     id: number;
//     title: string;
//     status: string;
//   }


import classNames from 'classnames';
import './styles.scss'

// function TodoLists(todoLists:{todoLists:TodoListProps[]}){
//     console.log(todoLists)

//     return (
//       <ul>
        
//       </ul>
//     );
//   }
  
//   export default TodoLists;

  interface Props {
    todoLists: any[],
    onTodoClick: (todo: any,index:any) => void;
}


function TodoList(props: Props){
// console.log(todoList)
const { todoLists,onTodoClick } = props;
// const handleTodoClick = (todo: any, index: any) =>{
//     onTodoClick(todo, index); 
// }

console.log(todoLists)
return (
  <ul className="todo-list">
    {todoLists.map((todo,index) =>(
        <li
          key={todo.id}
          className={classNames({ 'todo-item': true, completed: todo.status === 'completed' })}
          onClick={() => onTodoClick(todo, index)}
        >           {todo.title}
         </li>
    ))}
    
  </ul>
);
}

export default TodoList;


