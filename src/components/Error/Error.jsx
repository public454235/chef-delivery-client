import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <p>The resource requested could not be found on this server!</p>
            <Link to='/'> <Button className='fw-semibold' variant="danger">Go To Home</Button></Link>
        </div>
    );
};

export default Error;