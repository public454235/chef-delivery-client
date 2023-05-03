
import React from 'react';
import { Container } from 'react-bootstrap';



const Card = () => {
    return (
        <Container>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 text-center">
                        <img className='mx-auto' src="..." alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="btn btn-primary">View Recipes Button</a>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Card;