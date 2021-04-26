import React from 'react';
import Categories from '../Categories/Categories';
import HomeCarousel from '../HomeCarousel/HomeCarousel';

const Home = () => {
    return (
        <div>
            <div>
            <HomeCarousel></HomeCarousel>
            </div>

            <div> 
                <Categories></Categories>
            </div>
            
           
            
        </div>
    );
};

export default Home;