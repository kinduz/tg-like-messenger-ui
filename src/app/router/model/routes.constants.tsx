import { Navigate, RouteObject } from 'react-router-dom';
import { RoutesModel } from './routes.model';
import { AuthLazy } from '@/pages';

export const Routes: RouteObject[] = [
  {
    path: RoutesModel.auth,
    element: <AuthLazy />,
  },
  {
    path: '*',
    element: <Navigate to={'/auth'} />,
  },
];
