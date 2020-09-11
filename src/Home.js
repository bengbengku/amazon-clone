import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">                
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                              
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title='The lean startup: How Constant Innovation Creates Radically Successful Busineses Paperback' 
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'                        
                        rating={5}
                    />                    
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5 Litre
                        Glass Bowl" 
                        price={239.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"                        
                    />                                       
                </div>
 
                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) |
                        Smart speaker with Alexa, Chrocoal
                        Fabric
                        " 
                        price={98.99}
                        rating={5}
                        image="https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDFlLzkxODM0Njg0ODY2ODYuanBnfDkxNTNmNTk2YjdmOTY1ZTNmYWQ0OWU1NGY1MGVmMzk3NTBmOWZjMjVkZGY5NTQ5MmNhY2I3YmZiOWIzNzlmYWI"
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                        price={598.99}
                        rating={4}
                        image="https://static.bhphoto.com/images/images2500x2500/1584550074_1553840.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -
                        Super Ultra Wide Dual WQHD 5120 x 1440
                        " 
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
