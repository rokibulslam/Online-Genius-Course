import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' text-white pt-4 pb-4' style={{ backgroundColor: '#00ACD6' }}>
            <div className="container text-center text-md-left" >
                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 text-center text-md-left">
                    <div className="col mx-auto mt-3 mx-auto">
                        {/* <h5 className='text-uppercase mb-4 font-weight-bold text-white'>Edefy </h5> */}
                        <img className='text-white pb-4 w-100' src="https://i.ibb.co/N3Y9VVw/logo.png" alt="" />
                        <p>Build and Earn with your online store with lots of cool and exclusive features</p>
                        <div className='d-flex justify-content-evenly container mt-4'>
                            <p>
                                <Link to='/' className='text-white text-decoration-none'><i className='fab fa-facebook-f'></i></Link>
                            </p>
                            <p>
                                <Link to='/' className='text-white text-decoration-none'><i className="fab fa-twitter"></i></Link>
                            </p>
                            <p>
                                <Link to='/' className='text-white text-decoration-none'><i className="fab fa-instagram"></i></Link>
                            </p>
                        </div>
                    </div>
                    <div className="col mx-auto mt-3 mx-auto">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-white'> Resources </h5>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Privacy Policy</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Terms and License</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Support Policy</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Refund Policy</Link>
                        </p>

                    </div>
                    <div className="col mx-auto mt-3 mx-auto">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-white'> Useful Links </h5>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>About Us</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Help Link</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Term and Conditions</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-white text-decoration-none'>Contact Us</Link>
                        </p>


                    </div>
                    <div className="col mx-auto mt-3 mx-auto">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-white'> Market Earning </h5>
                        <p>online store with lots of cool and exclusive features Edefy</p>
                        <div className='d-flex '>
                            <div className='px-5'>
                                <p>Items Sold</p>
                                <h5>3400</h5>
                            </div>
                            <div>
                                <p>Total Earning</p>
                                <h5>20000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;