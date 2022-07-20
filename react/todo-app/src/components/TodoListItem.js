import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../scss/TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, pw, email, gender } = todo;
  return (
    <div className="TodoListItem">
      <table>
        <tr>
          <td>아이디 : </td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>비밀번호 : </td>
          <td>{pw}</td>
        </tr>
        <tr>
          <td>이메일 : </td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>성별 : </td>
          <td>{gender}</td>
        </tr>
        <tr>
          <td>
            <button className="edit">수정</button>
            <button onClick={() => onRemove(todo)}>삭제</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default TodoListItem;
