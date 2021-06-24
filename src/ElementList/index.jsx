import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import ElementListItem from './ElementListItem';
import { elementsState } from './state';

const data = {
  elements: [
    { id: 1, position: [1, 1] },
    { id: 2, position: [2, 2] },
    { id: 3, position: [3, 3] },
    { id: 4, position: [4, 4] },
  ],
};

function ElementList() {
  const setElements = useSetRecoilState(elementsState);

  useEffect(() => {
    setElements(data.elements);
  }, [setElements]);

  const handleSubmit = () => {
    // Todo
  };
  const handleClear = () => {
    // Todo
  };

  return (
    <div>
      {data.elements.map((element) => (
        <ElementListItem key={element.id} elementId={element.id} />
      ))}

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default ElementList;
