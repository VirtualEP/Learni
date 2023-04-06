import React from "react";
import images from "../../assets/photo-1494253109108-2e30c049369b.jpg"

function MentorCard() {
  return (
    <div className="carousel rounded-box">
      {/* <div className="carousel-item">
        <img
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Burger"
        />
      </div> */}
      {/* <div className="carousel-item">
        <img
          src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Burger"
        />
      </div> */}
      {/* <div className="carousel-item">
        <img
          src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          alt="Burger"
        />
      </div> */}
      <div id="slide1" className="carousel-item relative ">
      <div id="slide1" className="carousel-item relative w-full">
    <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
        {/* <img
          src={images}
          alt="Burger"
        /> */}
      </div>
      <div className="carousel-item">
        <img
          src={images}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={images}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={images}
          alt="Burger"
        />
      </div><div className="carousel-item">
        <img
          src={images}
          alt="Burger"
        />
      </div><div className="carousel-item">
        <img
          src={images}
          alt="Burger"
        />
      </div>
      {/* <div className="carousel-item">
        <img
          src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Burger"
        />
      </div> */}
    </div>
  );
}

export default MentorCard;
