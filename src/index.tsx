import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './app';

// ReactDOM.render is no longer supported in React 18. Use createRoot
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <App />
  </Router>
);
