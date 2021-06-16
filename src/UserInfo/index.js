import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNameQuery } from './state';

function UserInfo({ userId }) {
  const userName = useRecoilValue(userNameQuery(userId));
  return <div>{userName}</div>;
}

export default UserInfo;
