import React from 'react';
import { FaFacebook, FaGoogle, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import imge from '../../assets/cheff-tr.png'

const Footer = () => {
    return (
        <div className='bg-dark text-white p-5 mb-0 mt-3'>
            <div className='row row-cols-1 row-cols-md-4 text-center'>
                <div className="col">
                    <h3 className='fw-bold'>Company</h3>
                    <div className='mt-4'>
                        <p>About</p>
                        <p>We are hiring</p>
                        <p>Affiliate Program</p>
                        <p>Business Accounts</p>
                    </div>
                </div>
                <div className="col">
                    <h3 className='fw-bold mb-4'>Help</h3>
                    <p>Email Us</p>
                    <p>Help & FAQ</p>
                    <p>Make a Return</p>
                    <p>Shipping Policy</p>

                </div>
                <div className="col">
                    <h3 className='fw-bold mb-4'>Quick Links</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Affiliates</p>
                </div>
                <div className="col">
                    <h3 className='fw-bold mb-4'>Contact</h3>
                    <p><FaPhoneAlt></FaPhoneAlt> +1-202-555-0116</p>
                    <p><FaRegEnvelope></FaRegEnvelope>  hello@wecooked.io</p>
                </div>

            </div>
            <div className='mb-4 mt-4 text-center'>
                <FaFacebook className='me-3 ' style={{ fontSize: '2rem' }}></FaFacebook>
                <FaGoogle className='me-3' style={{ fontSize: '2rem' }}></FaGoogle>
                <FaTwitter style={{ fontSize: '2rem' }}></FaTwitter>

            </div>
            <p className='footer-detail text-center mt-5 fw-semibold'><small>Copyright 2021 Cooked.</small></p>
        </div>
    );
};

export default Footer;