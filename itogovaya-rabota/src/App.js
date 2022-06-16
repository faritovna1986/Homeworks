import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import IndexPage from './Pages/IndexPage/IndexPage';
import AboutPage from './Pages/AboutPage/AboutPage'; 
import Layout from './Layouts/Layout';
import { UsersPage } from './Pages/UsersPage/UsersPage';
import { UserPage } from './Pages/UserPage/UserPage';




function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<IndexPage/>}></Route>
        <Route path={'users'}>
          <Route index element={<UsersPage/>}></Route>
            <Route path={':userId'} element={<UserPage/>}></Route>
            <Route path={'info'} element={<UserPage/>}></Route>
          </Route>
        <Route path={'about'} element={<AboutPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
