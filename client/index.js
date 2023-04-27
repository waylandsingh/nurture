import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import './stylesheets/styles.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />);
// render(<App />, document.getElementById('app'));

//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app'),
//   );
