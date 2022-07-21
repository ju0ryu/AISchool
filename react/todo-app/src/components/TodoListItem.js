import '../scss/TodoListItem.scss';
import { MdCreate, MdRemoveCircleOutline } from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
  const { id, pw, email, gender } = todo;
  console.log(todo);

  return (
    <div className="TodoListItem">
      <table>
        <tr>
          <td>{id}</td>
          <td>{pw}</td>
          <td>{email}</td>
          <td>{gender}</td>
          <td>
            <button className="update" onClick={() => onUpdate(id)}>
              <MdCreate />
            </button>
          </td>
          <td>
            <button className="remove" onClick={() => onRemove(id)}>
              <MdRemoveCircleOutline />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default TodoListItem;
