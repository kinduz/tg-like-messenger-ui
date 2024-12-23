import { useRoutes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../model';

export default function Router() {
  // Для проработки ui идет заглушка на токен с local storage, в проде такого не будет
  const token = localStorage.getItem('token');
  return useRoutes(!token ? PublicRoutes : PrivateRoutes);
}

export const AppRouter = () => {
  return <Router />;
};
