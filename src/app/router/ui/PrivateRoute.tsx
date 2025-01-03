import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_ACCESS_KEY } from '@/shared';
import { RoutesModel } from '../model';

const PrivateRoute = () => {
  const isAccessToken = !!localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY);

  return isAccessToken ? <Outlet /> : <Navigate to={RoutesModel.auth} />;
};

export default PrivateRoute;
