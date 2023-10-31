import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import MainLayout from '@/shared/layouts/MainLayout';

const commonRoutes = [{ path: '/', element: <MainLayout />, children: [{ index: true, element: <Home /> }] }];
const router = createBrowserRouter([...commonRoutes]);

export default router;
