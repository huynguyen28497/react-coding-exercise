import React from 'react';
import { Button } from '@mui/material';
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
      <Button onClick={increment}>Increment</Button>
      <h2>{CountingState.counting}</h2>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default HomePage;
