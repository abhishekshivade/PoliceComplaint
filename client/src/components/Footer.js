import React from 'react';
import Logo from "../assets/RuPay.png";
import { ABOUT_ROUTE, CONTACT_ROUTE } from '../constants/AppRoutes'

const Footer = () => {
  return (
    <>
            <div className="Footer bg-blue-100">
                <div className="container px-20">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Products</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Bank Accounts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Savings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Credit Cards</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Loans</a>
                                </li>
                            </ul>
                        </div>
                            <div className="footer-icons mt-3 -ml-5">
                              <a href='https://www.facebook.com/CdacMumbaiJuhu/' target='_blank' rel='noreferrer'>
                              <i class="fa-brands fa-facebook"></i>
                              </a>
                              <a href='https://x.com/cdacindia?lang=en' target='_blank' rel='noreferrer'>
                              <i class="fa-brands fa-twitter"></i>
                              </a>
                              <a href='https://www.instagram.com/cdac_mumbai?igsh=NmYzZjBjNTR1ZzN6' target='_blank' rel='noreferrer'>
                              <i class="fa-brands fa-instagram"></i>
                              </a>
                              <a href='https://www.linkedin.com/in/cdac-mumbai-education-and-training-4b26111ba/' target='_blank' rel='noreferrer'>
                                <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href={ABOUT_ROUTE}>About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href={CONTACT_ROUTE}>Contact Us</a>
                                </li>
                                <p className='font-semibold text-black mt-3'>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3 text-center">
                            <h5>Rupay Bank</h5>
                            <img src={Logo} alt="RuPay logo" className="h-16 md:h-24 mx-auto" />
                            <p>we're committed to making banking simple, secure, and rewarding for you. Join us today and experience banking the Rupay way!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer bg-black text-white '>
                <p>Copyright &copy;Rupay Bank 2024 | Developed & Design by Team 18 </p>
            </div>
        </>
  )
}

export default Footer