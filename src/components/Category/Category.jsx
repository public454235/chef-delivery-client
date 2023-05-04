import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, author, chef_name, picture, published_date, Likes, Recipes } = category
    return (
        <Container>
            <div>
                <div className="col mb-4">
                    <div className="card h-100 ">
                        <img className='' src={author.picture} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{author.chef_name}</h5>
                            <p className="card-text">Experience: {author.published_date}</p>
                            <p className="card-text">Likes: {author.Likes}</p>
                            <p className="card-text">Recipes: {author.Recipes}</p>
                            <Link to={`/category/${_id}`}><Button variant="danger">View Recipes</Button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Category;