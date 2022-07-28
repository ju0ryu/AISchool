import { connect, useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import React from 'react';
import { useCallback } from 'react';
import useActions from '../lib/useActions';

// // 방법1 usedSelector,useDispatch 사용하여 코드 최적화
// const TodosContainer = () => {
//   const { input, todos } = useSelector(({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }));
//   const dispatch = useDispatch();
//   const onChangeInput = useCallback(
//     (input) => dispatch(changeInput(input)),
//     [dispatch],
//   );
//   const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
//   const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
//   const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={onChangeInput}
//       onInsert={onInsert}
//       onToggle={onToggle}
//       onRemove={onRemove}
//     />
//   );
// };

// export default TodosContainer;

// useActions 유틸 hook사용
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([
    changeInput,
    onInsert,
    onToggle,
    onRemove,
  ]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;

// //방법1
// const TodosContainer = ({
//   input,
//   toyos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);
