import React from 'react';
import HomePage from './routes/HomePage';
import ShopPage from './routes/ShopPage';
import BlogPage from './routes/BlogPage';
import ContactPage from './routes/ContactPage';

import { Routes, Route } from 'react-router-dom';

import Bestseller from './Component/Bestsel/Bestseller';
import Newarr from './Component/Newarrival/Newarr';
import Mostpop from './Component/Mostpopular/Mostpop';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const App=()=>{
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/'){
      navigate('/home')
    }
  }, [navigate])
  return(
    <div className="container">
      <Routes>
        <Route path = '/home' element = {<HomePage />}>
          <Route path = 'bestsell' element = {<Bestseller />}/>
          <Route path = 'newarrival' element = {<Newarr />} />
          <Route path = 'mostpop' element = {<Mostpop />} />
        </Route>
        <Route path = '/shop' element = {<ShopPage />} />
        <Route path = '/blog' element = {<BlogPage />} />
        <Route path = '/contact' element = {<ContactPage />} />
      </Routes>
    </div>
  );
};
export default App;
