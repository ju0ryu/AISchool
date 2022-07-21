import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';
import { useState } from 'react';

const TodoList = ({ todos, onRemove, onUpdate }) => {
  const { show, setShow } = useState(false);

  return (
    <div className="TodoList">
      <div>
        <table>
          <tr>
            <td>아이디</td>
            <td>비밀번호</td>
            <td>이메일</td>
            <td>성별</td>
            <td>수정</td>
            <td>삭제</td>
          </tr>
        </table>
      </div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
export default TodoList;
