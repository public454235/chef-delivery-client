
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Banners from '../Banners/Banners';
import { Container } from 'react-bootstrap';
import DetailsBanner from '../DetailsBanner/DetailsBanner';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[])
    
    return (
        <Container>
            <section>
                <div>
                    <Banners></Banners>
                </div>             
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                    {
                        categories.map(category=> <Category
                             key={category._id}  
                             category={category}

                        ></Category>)

                    }
                </div>
                <DetailsBanner></DetailsBanner>
            </section>
        </Container>
    );
};

export default Home;