import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Login from './pages/login'
import Signup from './pages/signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux';
import Page from './pages/page';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
        }
        ]
    },

]);


// const appElement = document.getElementById('root');
// ReactDOM.render(<App/>, appElement);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
