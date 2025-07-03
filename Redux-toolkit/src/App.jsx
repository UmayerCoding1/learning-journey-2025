import React from 'react';
import CounterView from './features/counter/counterView';
import PostView from './features/post/PostView';
const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterView />
      <PostView />
    </div>
  );
};

export default App;