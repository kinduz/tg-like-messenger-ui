import { Navigate, RouteObject } from 'react-router-dom';
import { RoutesModel } from './routes.model';
import { AuthLazy, ChatLazy, ChatNotSelectedLazy, MainPageLazy } from '@/pages';
import PrivateRoute from '../ui/PrivateRoute';
import PublicRoute from '../ui/PublicRoute';

export const Routes: RouteObject[] = [
  {
    element: <PublicRoute />,
    children: [
      {
        path: RoutesModel.auth,
        element: <AuthLazy />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <MainPageLazy />,
        children: [
          {
            path: '',
            element: <ChatNotSelectedLazy />,
          },
          {
            path: RoutesModel.chat_id,
            element: <ChatLazy />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
];
