import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

// const appElement = document.getElementById('root');
// ReactDOM.render(<App/>, appElement);
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <RouterProvider router={router} />
)
