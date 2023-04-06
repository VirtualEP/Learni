import React from "react";
import images from "../../assets/photo-1494253109108-2e30c049369b.jpg";

function MentorCard() {
  return (
    <div className="carousel">
      <div className="flex max-w-md">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure>
              <img src={images} alt="Movie" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
             
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure>
              <img src={images} alt="Movie" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
             
            </div>
          </div>        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure>
              <img src={images} alt="Movie" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
             
            </div>
          </div>        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure>
              <img src={images} alt="Movie" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              
            </div>
          </div>          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorCard;
