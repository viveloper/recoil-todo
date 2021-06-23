import React from 'react';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { elementStateFamily } from './state';

function ElementListItem({ elementInfo }) {
  console.log('render ElementListItem', elementInfo.id);

  const element = useRecoilValue(elementStateFamily(elementInfo));

  const setElementStateFamily = useSetRecoilState(elementStateFamily(element));

  const resetElementStateFamily = useResetRecoilState(
    elementStateFamily(element)
  );

  const handleUpdateElement = () => {
    console.log('element', {
      ...element,
      position: [element.position[0] + 1, element.position[1] + 1],
    });
    setElementStateFamily({
      ...element,
      position: [element.position[0] + 1, element.position[1] + 1],
    });
  };

  const handleClearElement = () => {
    resetElementStateFamily();
  };

  return (
    <div>
      <span>ID: {element.id}</span>
      <span style={{ marginLeft: '1rem' }}>
        Position: {`(${element.position[0]}, ${element.position[1]})`}
      </span>
      <button onClick={handleUpdateElement} style={{ marginLeft: '1rem' }}>
        Update
      </button>
      <button onClick={handleClearElement} style={{ marginLeft: '1rem' }}>
        Clear
      </button>
    </div>
  );
}

function ElementList() {
  const elements = [
    { id: 1, position: [1, 1] },
    { id: 2, position: [2, 2] },
    { id: 3, position: [3, 3] },
    { id: 4, position: [4, 4] },
  ];

  const handleSubmit = () => {};
  const handleClear = () => {};
  return (
    <div>
      {elements.map((element) => (
        <ElementListItem key={element.id} elementInfo={element} />
      ))}

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default ElementList;
