import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      <TodoListItem todo={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};
export default TodoList;
