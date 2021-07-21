import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../../services/actions/auth';

export const ProtectedRouteAuth = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem('refreshToken');
  const { name } = useSelector((store) => store.auth);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const render = ({ location }) => {
    if (name || hasToken) {
      return children;
    }
    return (
      <Redirect to={{ pathname: '/login', state: { target: location } }} />
    );
  };
  return <Route {...rest} render={render} />;
};

const getNextPage = (location, history) => {
  let result;

  if (location && location.state?.target) {
    result = location.state.target;
    delete location.state.target;
  } else {
    result = '/';
  }

  return result;
};

export const ProtectedRouteUnAuth = ({ children, ...rest }) => {
  const { name } = useSelector((store) => store.auth);
  const render = ({ location, history }) => {
    if (!name) {
      return children;
    }

    return <Redirect to={getNextPage(location, history)} />;
  };

  return <Route {...rest} render={render} />;
};
