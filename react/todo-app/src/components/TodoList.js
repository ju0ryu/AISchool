import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

const TodoList = ({ todos, onRemove, onUpdate }) => {
  return (
    <div className="TodoList">
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
