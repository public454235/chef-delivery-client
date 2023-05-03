import React from 'react';
import { Button, Container } from 'react-bootstrap';
import img from '../../assets/we-are.png'

const Banners = () => {
    return (
        <Container>


        <div className='d-lg-flex align-items-center my-5'>

            
            <div className='ms-2'>
                <h1>Welcome To Our Restaurant <br /> <span className='fw-bold text-black'>Amazing & Delicious Food
                    This Is Photoshop's Version Of Lorem Ipsum. Proin Gravida Nibh Vel Velit Auctor Aliquet.</span> </h1>
                <p>Who We Are ?Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                <Button variant="danger">MORE INFO </Button>
                
            </div>
            <img src={img} alt="" />
            
        </div>




    </Container>
    );
};

export default Banners;