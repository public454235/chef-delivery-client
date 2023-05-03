
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Banners from '../Banners/Banners';





const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[])
    
    return (
        <div>
            <section>
                <div>
                    <Banners></Banners>
                </div>             
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        categories.map(category=> <Category
                             key={category.id}  
                             category={category}

                        ></Category>)

                    }
                </div>
            </section>
        </div>
    );
};

export default Home;