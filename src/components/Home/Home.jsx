
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Banners from '../Banners/Banners';
import { Container } from 'react-bootstrap';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import MasterChefs from '../MasterChefs/MasterChefs';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dragon-sevre-assignment10-public454235.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <Container>
            <section>
                <div>
                    <Banners></Banners>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}

                        ></Category>)

                    }
                </div>
                <DetailsBanner></DetailsBanner>
                <MasterChefs></MasterChefs>
            </section>
        </Container>
    );
};

export default Home;