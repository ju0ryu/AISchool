import '../scss/TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
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
            <button onClick={() => onToggle(id, pw, email, gender)}>
              수정
            </button>
          </td>
          <td>
            <button onClick={() => onRemove(id)}>삭제</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default TodoListItem;
