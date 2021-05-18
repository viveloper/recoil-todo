import { useSetRecoilState } from 'recoil';
import { todoListState } from './state';

function TodoItem({ item }) {
  const setTodoList = useSetRecoilState(todoListState);

  const editItemText = (e) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === item.id ? { ...todo, text: e.target.value } : todo
      )
    );
  };
  const toggleItemCompletion = (e) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === item.id ? { ...todo, isComplete: e.target.checked } : todo
      )
    );
  };
  const deleteItem = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== item.id)
    );
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
