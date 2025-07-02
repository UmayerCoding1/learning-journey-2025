import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './CounterSlice';
const CounterView = () => {
    const count = useSelector((stste) => stste.counter.count);
    const disparch = useDispatch(); 
    
    return (
        <div>
           <h2>Count: {count}</h2>
           <button onClick={() => disparch(increment())}>Increment</button>
           <button onClick={() => disparch(decrement())}>Decrement</button>
           <button onClick={() => disparch(reset())}>Reset</button>
           <button onClick={() => disparch(incrementByAmount(5))}>increment by 5</button>
        </div>
    );
};

export default CounterView;