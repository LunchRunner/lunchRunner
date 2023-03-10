import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
// const appElement = document.getElementById('root');
// ReactDOM.render(<App/>, appElement);
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>)