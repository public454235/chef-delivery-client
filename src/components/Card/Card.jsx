
import React from 'react';



const Card = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 text-center">
                        <img className='mx-auto' src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-primary">View Recipes Button</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;