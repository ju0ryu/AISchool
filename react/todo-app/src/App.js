import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

const App = () => {
  const [update, setUpdate] = useState({
    id: '',
    pw: '',
    email: '',
    gender: '',
  });
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (id, pw, email, gender) => {
      const todo = {
        num: nextId.current,
        id: id,
        pw: pw,
        email: email,
        gender: gender,
      };
      const filter = todos.filter((todo) => todo.id !== id);
      setTodos(filter.concat(todo));
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

  const onUpdate = useCallback((id) => {
    const updateValue = todos.filter((todo) => todo.id === id)[0];

    const copyUpdate = {
      ...update,
      id: updateValue.id,
      pw: updateValue.pw,
      email: updateValue.email,
      gender: updateValue.gender,
    };
    setUpdate(copyUpdate);
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} update={update} />
      <TodoList todos={todos} onRemove={onRemove} onUpdate={onUpdate} />
    </TodoTemplate>
  );
};

export default App;
