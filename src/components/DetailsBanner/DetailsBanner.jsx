import React from 'react';
import img from '../../assets/cheff-tr.png'
import { Button, Container } from 'react-bootstrap';

const DetailsBanner = () => {
    return (
        <Container>


            <div className='d-lg-flex align-items-center my-5'>


                <div className='px-4'>
                    
                    <h1 className='fw-bold text-black'>COUPLES DINNER <br/>Amazing & Delicious Food
                        This Is Photoshop's Version Of Lorem Ipsum. </h1>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit.</p>
                    <Button className='mb-2' variant="danger">MORE INFO </Button>

                </div>
                <img src={img} className=' card-img-top' alt="" />

            </div>




        </Container>
    );
};

export default DetailsBanner;