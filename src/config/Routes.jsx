import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Home from '../pages/Home';



const AppRoutes = ()=> {
  return (
    <Routes>
      <Route path="/"
      element={<Home/>}
      />
      <Route path='/:category/search/:keyword'
       element={ <Catalog/>}
      />
      <Route path='/:category/id'
      element={ <Detail/>}
      />
      <Route path='/:category'
      element={ <Catalog/>}
      />
    </Routes>
    );
}

export default AppRoutes;
