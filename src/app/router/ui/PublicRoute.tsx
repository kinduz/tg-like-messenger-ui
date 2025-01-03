import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_ACCESS_KEY } from '@/shared';

const PublicRoute = () => {
  const isAccessToken = !!localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY);

  return !isAccessToken ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;