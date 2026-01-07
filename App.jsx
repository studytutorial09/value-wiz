import { useContext, useEffect, useState } from 'react';
import Login from "./component/Auth/log.jsx";
import EmployeeDashboard from './component/Dashboad/EmployeeDashboard.jsx';
import AdminDashboard from './component/Dashboad/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
import Userview from './component/Dashboad/Userview.jsx';
import Card from './pages/Card.jsx';
import Productcard from './pages/Prodectcard.jsx';
import Nav from './pages/Nav.jsx';
import './App.css';
import Slider from './pages/Slider1.jsx';


const App = () => {
  return (
    <Login />

  );
}

export default App;