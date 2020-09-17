import React from 'react';
import { useDispatch } from 'react-redux';

const useDispatchAction = (action, queryName, queryPage) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(action(queryName, queryPage));
  }, [dispatch, action, queryName, queryPage]);
};

export default useDispatchAction;
