import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
// import AdminLogin from './components/adminComponents/AdminLogin';
import UserLogin from './components/userComponents/UserLogin';
// import UserRegistration from './components/userComponents/UserRegistration';
import { ABOUT_ROUTE, ADMIN_DASHBOARD, ADMIN_LOGIN_ROUTE, BASE_ROUTE, CONTACT_ROUTE, USER_DASHBOARD, USER_LOGIN_ROUTE, USER_SIGNUP_ROUTE, LOREM } from './constants/AppRoutes';
// import UserDashboard from './components/userComponents/UserDashboard';
// import AdminDashboard from './components/adminComponents/AdminDashboard';
import Lorem from './components/subComponents/Lorem';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path={BASE_ROUTE} element={<Home/>}/>
      <Route path={CONTACT_ROUTE} element={<Contact/>}/>
      <Route path={ABOUT_ROUTE} element={<About/>}/>
      {/* <Route path={ADMIN_LOGIN_ROUTE} element={<AdminLogin/>}/>
      <Route path={ADMIN_DASHBOARD} element={<AdminDashboard/>}/> */}
      <Route path={LOREM} element={<Lorem/>}/>

       <Route path={USER_LOGIN_ROUTE} element={<UserLogin/>}/>
      {/*<Route path={USER_SIGNUP_ROUTE} element={<UserRegistration/>}/>
      <Route path={USER_DASHBOARD} element={<UserDashboard/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
