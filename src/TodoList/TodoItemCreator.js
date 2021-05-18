import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './state';

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
