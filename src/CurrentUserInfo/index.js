import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserNameState, currentUserIdState } from './state';

function CurrentUserInfo() {
  const currentUserName = useRecoilValue(currentUserNameState);
  const [currentUserId, setCurrentUserId] = useRecoilState(currentUserIdState);

  const handleUserChange = () => {
    if (currentUserId >= 3) {
      setCurrentUserId(1);
    } else {
      setCurrentUserId(currentUserId + 1);
    }
  };
  return (
    <div>
      <div>{currentUserName}</div>
      <button onClick={handleUserChange}>Change User</button>
    </div>
  );
}

export default CurrentUserInfo;
