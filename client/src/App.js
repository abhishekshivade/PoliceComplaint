import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
// import Navbar from './components/NavbarCopy';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import AdminLogin from './components/adminComponents/AdminLogin';
import AdminRegistration from "./components/adminComponents/AdminRegistration"
import CustomerLogin from './components/customerComponents/CustomerLogin';
import CustomerRegistration from './components/customerComponents/CustomerRegistration';
import { ABOUT_ROUTE, ADMIN_DASHBOARD, ADMIN_LOGIN_ROUTE, ADMIN_SIGNUP_ROUTE, BASE_ROUTE, CONTACT_ROUTE, CUSTOMER_DASHBOARD, CUSTOMER_LOGIN_ROUTE, CUSTOMER_SIGNUP_ROUTE, LOREM } from './constants/AppRoutes';
import CustomerDashboard from './components/customerComponents/CustomerDashboard';
import AdminDashboard from './components/adminComponents/AdminDashboard';
import Lorem from './components/subComponents/Lorem';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path={BASE_ROUTE} element={<Home/>}/>
      <Route path={CONTACT_ROUTE} element={<Contact/>}/>
      <Route path={ABOUT_ROUTE} element={<About/>}/>
      <Route path={ADMIN_LOGIN_ROUTE} element={<AdminLogin/>}/>
      <Route path={ADMIN_SIGNUP_ROUTE} element={<AdminRegistration/>}/>
      <Route path={ADMIN_DASHBOARD} element={<AdminDashboard/>}/>
      <Route path={LOREM} element={<Lorem/>}/>

      <Route path={CUSTOMER_LOGIN_ROUTE} element={<CustomerLogin/>}/>
      <Route path={CUSTOMER_SIGNUP_ROUTE} element={<CustomerRegistration/>}/>
      <Route path={CUSTOMER_DASHBOARD} element={<CustomerDashboard/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
