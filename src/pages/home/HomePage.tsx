import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounting,
  incrementCounting,
} from 'redux/actions/counting.actions';
import { ICountingState } from 'redux/reducers/counting.reducers';

interface Props {}

const HomePage = (props: Props) => {
  const CountingState: any = useSelector<ICountingState>(
    (state) => state.counting
  );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounting(20));
  };
  const decrement = () => {
    dispatch(decrementCounting(10));
  };

  return (
    <div style={{}}>
      <h1>This is Home Page</h1>
      <button onClick={increment}>Increment</button>
      <h2>{CountingState.counting}</h2>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default HomePage;
