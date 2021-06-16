import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';
import CurrentUserInfo from './CurrentUserInfo';
import UserInfo from './UserInfo';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <RecoilRoot>
      <h3>Todo List</h3>
      <TodoList />

      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <h3>Current User Info</h3>
          <CurrentUserInfo />
        </React.Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <h3>User Info List</h3>
          <UserInfo userId={1} />
          <UserInfo userId={2} />
          <UserInfo userId={3} />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
