import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';

const commonRoutes = [{ path: '/', element: <Home /> }];
const router = createBrowserRouter([...commonRoutes]);

export default router;
