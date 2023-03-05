import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import Products from './pages/Products';
import CreateProduct from './pages/create-product';

import Category from './pages/Category';
import Order from './pages/Order';
import User from './pages/User';
import Asset from './pages/Asset';
import Marketing from './pages/Marketing';
import Settings from './pages/Settings';
import Blog from './pages/Blog';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <Dashboard /> },
        { path: 'products', element: <Products /> },
        { path: 'products/create', element: <CreateProduct /> },
        { path: 'category', element: <Category /> },
        { path: 'orders', element: <Order /> },
        { path: 'user', element: <User /> },
        { path: 'assets', element: <Asset /> },
        { path: 'marketing', element: <Marketing /> },
        { path: 'settings', element: <Settings /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
