import { useState } from "react";
import styled from "styled-components";

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


export default function TodoForm({handleAdd}){
  // state

  const [newTodo, setNewTodo] = useState("");

  // comportement

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // 2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const name = newTodo;
    const TodoAdd = {id,name};
    handleAdd(TodoAdd)
    setNewTodo("");
  };
  // affichage

  return <form action="submit" onSubmit={handleSubmit}>
  <Input
    value={newTodo}
    type="text"
    placeholder="Ajouter une tache ..."
    onChange={handleChange}
  />
  <Button>+</Button>
</form>
}