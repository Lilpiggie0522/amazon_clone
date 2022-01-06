// import React from "react";
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
          id = "1322791"
           title= "Genghis Khan and the Making of the Modern World Kindle Edition"
           price= {49.99}
           image="https://m.media-amazon.com/images/I/51wMpWiO4BL.jpg"
           rating={5} 
          />

          <Product
          id="3317882" 
          title= "2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Grey"
          price= {899}
          image="https://m.media-amazon.com/images/I/71xD+++tcEL._AC_SX679_.jpg"
          rating={5} 
          />
        </div>

        <div className="home__row">
          <Product
          id="9877221"
           title= 'SoundPEATS Smart Watch Fitness Tracker with All Day Heart Rate Monitor Sleep Quality Tracker IP68 Waterproof 1.4" Large Touch Screen Call  Message Reminder 12 Sports Modes for iPhone Android Phones'
           price= {279.99}
           image="https://m.media-amazon.com/images/I/51SG56fmcDL._AC_SX679_.jpg"
           rating={5} 
          />

          <Product
          id="2177521"
           title= "Kenwood kMix Stand Mixer, 1000 W, Red"
           price= {419.99}
           image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX679_.jpg"
           rating={5} 
          />

          <Product
          id="1788672"
           title= "The Lean Start Up"
           price= {59.99}
           image="https://images-fe.ssl-images-amazon.com/images/I/51oer-BMLNL._AC_SX368_.jpg"
           rating={5} 
          />
        </div>

        <div className="home__row">
          <Product
          id="3506765"
           title= "Canon EOS 90D DSLR with EFS 18-135mm f/3.5-5.6mm IS STM Lens"
           price= {1888}
           image="https://m.media-amazon.com/images/I/81QKcQmJF7L._AC_SX679_.jpg"
           rating={5} 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;