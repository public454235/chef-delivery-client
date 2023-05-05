import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../assets/master-chef1.jpg'
import img2 from '../../assets/master-chef2.jpg'
import img3 from '../../assets/master-chef3.jpg'
import img4 from '../../assets/master-chef4.jpg'

const MasterChefs = () => {
    return (
        <Container>
            <h1 className='text-center'> <small>Our</small> Master Chefs</h1>
            <div className='d-lg-flex align-items-center my-5'>
                <div>
                    <img src={img1} className='card-img-top' alt="" />
                    <h3 className='mt-3'>Christopher</h3>
                    <p>CEO</p>
                </div>
                <div>
                    <img src={img2} className='card-img-top' alt="" />
                    <h3 className='mt-3'>Kenneth</h3>
                    <p>Chef</p>
                </div>
                <div>
                    <img src={img3} className='card-img-top' alt="" />
                    <h3 className='mt-3'>Matthew</h3>
                    <p>Chef</p>
                </div>
                <div>
                    <img src={img4} className='card-img-top' alt="" />
                    <h3 className='mt-3'>Matthew</h3>
                    <p>Head Chef</p>
                </div>
            </div>







        </Container>
    );
};

export default MasterChefs;