import '../scss/TodoListItem.scss';
import { MdCreate, MdRemoveCircleOutline } from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
  const { id, pw, email, gender } = todo;
  console.log(todo);

  return (
    <div className="TodoListItem">
      <table>
        <tr>
          <td>아이디</td>
          <td>비밀번호</td>
          <td>이메일</td>
          <td>성별</td>
          <td>수정</td>
          <td>삭제</td>
        </tr>
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
