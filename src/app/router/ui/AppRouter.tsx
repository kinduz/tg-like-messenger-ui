import { useRoutes } from 'react-router-dom';
import { Routes } from '../model';

export default function Router() {
  return useRoutes(Routes);
}

export const AppRouter = () => {
  return <Router />;
};
