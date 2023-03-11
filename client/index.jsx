import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Login from './login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <Login />
        // children: [
        //     {
        //         path: "login/",
        //         element: <login />
        //     },
        // ]
    },
    {
        path: "login",
        element: <Login />
    },

]);


// const appElement = document.getElementById('root');
// ReactDOM.render(<App/>, appElement);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
