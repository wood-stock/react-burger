import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { useEffect, FC } from 'react';
import { refresh } from '../../services/actions/auth';
interface iProtectedRouteAuth{
  path: string;
  exact?: boolean;
}
export const ProtectedRouteAuth:FC<iProtectedRouteAuth> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem('refreshToken');
  const { name } = useSelector((store) => store.auth);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const render = ({ location }:{location:any}) => {
    if (name || hasToken) {
      return children;
    }
    return (
      <Redirect to={{ pathname: '/login', state: { target: location } }} />
    );
  };
  return <Route {...rest} render={render} />;
};

const getNextPage = (location:any, history: any) => {
  let result;

  if (location && location.state?.target) {
    result = location.state.target;
    delete location.state.target;
  } else {
    result = '/';
  }

  return result;
};

export const ProtectedRouteUnAuth:FC<iProtectedRouteAuth> = ({ children, ...rest }) => {
  const { name } = useSelector((store) => store.auth);
  const render = ({ location, history }:{location:any, history: any}) => {
    if (!name) {
      return children;
    }

    return <Redirect to={getNextPage(location, history)} />;
  };

  return <Route {...rest} render={render} />;
};
