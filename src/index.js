import React from 'react'
import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import '../src/styles/styles.css';
import Layout from '../src/layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Layout/>);