import * as React from 'react';
import Navbar from './component/Navigation';
import About from './component/About';
import Menu from './component/Menu';
import Navigate from './component/Navbar';

export default function App() {
  return (
  <>
    <Navbar />
    <Navigate/>
    <Menu/>
    <About/>
    </>
  );
}