import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainTemplate from './templates/main'
import { BrowserRouter as Router } from 'react-router-dom';
import { route } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <MainTemplate>
            {route}
        </MainTemplate >
    </Router>
);