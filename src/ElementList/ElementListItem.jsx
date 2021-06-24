import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { elementStateFamily } from './state';

function ElementListItem({ elementId }) {
  console.log('render ElementListItem', elementId);

  const [element, setElement] = useRecoilState(elementStateFamily(elementId));
  const resetElement = useResetRecoilState(elementStateFamily(elementId));

  const handleUpdateElement = () => {
    setElement({
      ...element,
      position: [element.position[0] + 1, element.position[1] + 1],
    });
  };

  const handleClearElement = () => {
    resetElement();
  };

  return (
    <>
      {element && (
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
      )}
    </>
  );
}

export default ElementListItem;
