import React from 'react'
import { createRoot } from 'react-dom/client';
import '../src/styles/index.css'
import '../src/styles/styles.css'
import Layout from '../src/layout'
import 'bootstrap-icons/font/bootstrap-icons.css'

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Layout/>);