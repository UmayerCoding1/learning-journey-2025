import React from 'react';
import { useCountStore } from './store/store';

const App = () => {
  const count = useCountStore((state) => state.count);
  return (
    <div className='' >
      {count}

<div style={{marginTop: '20px'}}></div>
      <div style={{display: 'flex', gap: '5px'}}>
        <button onClick={() => useCountStore.getState().increment()}>+</button>
      <button onClick={() => useCountStore.getState().decrement()}>-</button>
      <button onClick={() => useCountStore.getState().reset()}>reset</button>
      </div>
    </div>
  );
};

export default App;