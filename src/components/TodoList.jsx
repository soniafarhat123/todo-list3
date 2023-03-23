import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TodoItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
  font-size: 20px;
`;

export default function TodoList({todoInfo,OnClickD,OnClickU}){

  // state

  // comportements

  // affichage (render)

  return <TodoItem>
  {todoInfo.name}{" "}
  <button onClick={OnClickD}><FontAwesomeIcon icon={faTrash} color="#ff0000" /></button>
  <button onClick={OnClickU}><FontAwesomeIcon icon={faEdit} color="#00ff00" /></button>
</TodoItem>
}