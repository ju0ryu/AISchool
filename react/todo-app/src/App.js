import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      num: 0,
      id: 'example',
      pw: '1234',
      email: 'ex@example.com',
      gender: '남자',
    },
  ]);
  const nextId = useRef(1);
  console.log(todos);
  const onInsert = useCallback(
    (id, pw, email, gender) => {
      const todo = {
        num: nextId.current,
        id: id,
        pw: pw,
        email: email,
        gender: gender,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todos.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
