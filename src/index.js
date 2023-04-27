import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Aboutpage from './pages/Aboutpage';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Singlepost from './pages/Singlepost';
import NewsList from './components/NewsList';
import TodoList from './components/ToDo';
import CartPage from './pages/CartPage'


import { Provider } from 'react-redux'
import { store } from './store'
import Products from './pages/Products';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/about',
                element: <Aboutpage />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/post',
                element: <NewsList />
            },
            {
                path: '/todolist',
                element: <TodoList />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/post/:id',
                element: <Singlepost />
            },
            {
                path: '/cart',
                element: <CartPage />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

);
