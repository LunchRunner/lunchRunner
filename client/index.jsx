import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Start from './pages/startPage'
import Login from './pages/login'
import Signup from './pages/signup';
import PostsDisplay from '../client/components/postsDisplay'
import PostsCreator from '../client/components/postsCreator'
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux';
import Page from './pages/page';


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            path: '/',
            element: <Start />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/home",
            element: <Page />
        },
        {
            path: '/listview',
            element: <PostsDisplay />
        },
        {
            path: '/createrun',
            element: <PostsCreator />
        }
        ]
    },

]);


// const appElement = document.getElementById('root');
// ReactDOM.render(<App/>, appElement);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    // </React.StrictMode>
)
