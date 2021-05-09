import React from "react";
import { useState } from "react";
import ImageSlider from "./ImageSlider";

function App(){

    const [query, setQuery]= useState("");
    const [images,setimages]= useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
          `https://pixabay.com/api/?key=21538286-3db55694b26dbaab4c459dcae&q=${query}`
        )  
          .then((response) => response.json())
          .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
          .then(setimages); 
      };

    return (
        <div className="Apps">
            <h1> Image Slider</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event)=> setQuery(event.target.value)} />
                <input type="submit" value="search" />
            </form>
            <ImageSlider images={images} />

        </div>
    );
}
export default App;