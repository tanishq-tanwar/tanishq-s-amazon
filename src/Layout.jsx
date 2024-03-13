import { Outlet } from 'react-router-dom';
import Menubar from './Menubar';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export const MyContext = createContext([]);

const Layout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="container-fluid">
      <MyContext.Provider value={{ cart, setCart }}>
        <h1>Tanishq's Amazon</h1>
        <hr />
        <Menubar />
        <hr />
        <Outlet />
      </MyContext.Provider>
    </div>
  );
};

export default Layout;
