import { RouteObject } from 'react-router-dom';
import publicRoutes from '../feature/public/routes/publicRoutes';
import AdminBase from '../layout/home/index';
import AuthContext from '../context/AuthContext';
import authRoutes from '../feature/auth/routes/authRoutes';
import AuthLayout from '../feature/auth/Layout';





const routes: RouteObject[] = [
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            ...authRoutes,
        ]
    },
    {
        path: '/admin',
        element: <AuthContext><AdminBase /></AuthContext>,
        children: [
            ...publicRoutes,
        ]
    },

];

export { routes };