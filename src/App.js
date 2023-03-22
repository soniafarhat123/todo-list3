import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoListWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const TodoItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkblue;
  }
`;
const Input = styled.input`
  border: 2px solid #000;
`;

function App() {
  // state (état, données)
  const [TodoList, setTodoList] = useState([]);

  const [newTodo, setNewTodo] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // 1. Copie du state
    const TodoListCopy = [...TodoList];
    // 2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const name = newTodo;
    TodoListCopy.push({ id, name });
    // 3. Modifier le state avec le setter
    setTodoList(TodoListCopy);
    setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  // affichage (render)

  return (
    <TodoListWrapper>
      <h1>Todo List</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <Input
          value={newTodo}
          type="text"
          placeholder="Ajouter une tache ..."
          onChange={handleChange}
        />
        <Button>+</Button>
      </form>
      <ul>
        {TodoList.map((todo, index) => {
          return (
            <TodoItem key={index}>
              {todo.name}{" "}
              <button onClick={() => handleDelete(todo.id)}>
                <FontAwesomeIcon icon={faTrash} color="#ff0000" />
              </button>
            </TodoItem>
          );
        })}
      </ul>
    </TodoListWrapper>
  );
}

export default App;
