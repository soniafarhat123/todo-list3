import { useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TodoListWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

function App() {
  // state (état, données)
  const [TodoList, setTodoList] = useState([]);

  // comportements
  const handleDelete = (id) => {
    console.log(id);
    // 1. copie du state
    const TodoListCopy = [...TodoList];
    // 2. manipuler ma copie du state
    const TodoCopyUpdated = TodoListCopy.filter((todo) => todo.id !== id);
    // 3. modifier mon state avec le setter
    setTodoList(TodoCopyUpdated);
  };

  const handleAdd = (TodoAdd) => {
    // 1. Copie du state
    const TodoListCopy = [...TodoList];

    // 2. Manipulation sur la copie du state
    TodoListCopy.push(TodoAdd);

    // 3. Modifier le state avec le setter
    setTodoList(TodoListCopy);
  };

  const handleEdit = (id, newText) => {
    const edit_todo = TodoList.findIndex((todo) => todo.id === id);
    if (edit_todo >= 0) {
      TodoList[edit_todo].name = newText;
      setTodoList([...TodoList]);
    }
  };
  // affichage (render)

  return (
    <TodoListWrapper>
      <h1>Todo List</h1>
      <TodoForm handleAdd={handleAdd} />
      <ul>
        {TodoList.map((todo) => {
          return (
            <TodoList
              todoInfo={todo}
              key={todo.id}
              OnClickD={() => () => handleDelete(todo.id)}
              OnClickUpdate={() =>
                handleEdit(todo.id, prompt("Modifier la tache : ", todo.name))
              }
            />
          );
        })}
      </ul>
    </TodoListWrapper>
  );
}

export default App;
