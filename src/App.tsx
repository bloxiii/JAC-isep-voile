import React from 'react';
import Task from './page';
import Page from './page1/page1.tsx';
import Page2 from './page2/page2.tsx';
import Page4 from './page4/page4.tsx';
import Login from './Login/login.tsx';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/task" element={<Task />} />
  <Route path="/page1" element={<Page />} />
  <Route path="/prospects" element={<Page2 />} />
  <Route path="/profil" element={<Page4 />} />
</Routes>
</BrowserRouter>

  );
}




