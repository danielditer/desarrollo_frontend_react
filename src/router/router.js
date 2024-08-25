import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";

import App from "../App";
import LandingPage from "../screens/LandingPage";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo_frontend_react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;