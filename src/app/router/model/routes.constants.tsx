import { Navigate, RouteObject } from 'react-router-dom';
import { RoutesModel } from './routes.model';
import { AuthLazy, ChatLazy, ChatNotSelectedLazy, MainPageLazy } from '@/pages';

export const PublicRoutes: RouteObject[] = [
  {
    path: RoutesModel.auth,
    element: <AuthLazy />,
  },
  {
    path: '*',
    element: <Navigate to={'/auth'} />,
  },
];

export const PrivateRoutes: RouteObject[] = [
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
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
];
