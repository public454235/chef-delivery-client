import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';




const CardDetails = () => {
    const {id} = useParams()  
    const detailse = useLoaderData()

    const { author, details, thumbnail_url, recipes,} = detailse
    return (
        <Container>


        <div className='d-lg-flex align-items-center my-5'>


            <div className='px-4'>
                <h3 className='fw-bold text-danger-emphasis'>{author?.chef_name}</h3>
                <p>{details}</p>
                <p className='mb-0'>Experience: {author?.published_date}</p>
                <p className='mb-0'>Likes: {author?.Likes}</p>
                <p>Recipes: {author?.Recipes}</p>
                <Button variant="danger">MORE INFO </Button>

            </div>
            <img src={thumbnail_url} className='card-img-top' alt="" />

        </div>
        <div className='row  row-cols-md-3 row-cols-sm-1 mt-5 '/>
                <div className='card col'>
                    <h3 className='mt-3'> Recipe: {recipes[0]?.title}</h3>
                    <h4>Ingredients: </h4>
                    <ol>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[0]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[1]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[2]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[3]}</li>
                        <li className='fw-semibold'> {recipes[0]?.ingredients[4]}</li>
                    </ol>
                    
                </div>




    </Container>
    );
};

export default CardDetails;