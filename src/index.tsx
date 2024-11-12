import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './StateContext';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);