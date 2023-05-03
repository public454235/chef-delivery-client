
import React from 'react';
import banner from '../../../assets/we-are.png'
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const Banner = () => {
    return (
            <Container>
              
                
                 <div className='d-lg-flex align-items-center my-5'>
                 
                    <img src={banner} alt="" />
                    <div>
                        <h4>Who We Are ?</h4>
                        <p>Who We Are ?Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                    </div>
                 </div>
                
               
            
        
            </Container>

        
    );
};

export default Banner;