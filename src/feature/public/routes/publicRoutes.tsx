import { RouteObject } from 'react-router-dom';
import DashBoard from '../view/Dashboard';

const publicRoutes: RouteObject[] = [
    { path: '/admin', element: <DashBoard/> },
]

export default publicRoutes;
