import React from "react";
import images from "../../assets/photo-1494253109108-2e30c049369b.jpg";

function MentorCard() {
  return (
    <div className="carousel rounded-box">
      <div className="flex max-w-md space-x-4">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure className="w-full">
              <img
                src={
                  "https://images.unsplash.com/photo-1543278732-824a807df8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                }
                alt="image"
                className="h-[100%]"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Abeiku French</h2>
              <p>
                I will recommend DevTray for any student who wants the best of
                online education.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle glass text-white">
              ❮
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure className="w-full">
              <img src={images} alt="image" className="h-[100%]" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Kofi Nsiah</h2>
              <h2>
                DevTray has helped me to improve academically with its
                professional instructors.
              </h2>
            </div>
          </div>{" "}
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure className="w-full">
              <img src={images} alt="Movie" className="h-[100%]" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Majorie Hagan</h2>
              <p>
                I will recommend DevTray for any student who wants the best of
                online education.
              </p>
            </div>
          </div>{" "}
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="card card-side bg-base-100 shadow-xl w-full h-[100%]">
            <figure className="w-full">
              <img src={images} alt="Movie" className="h-[100%]" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Ms. Penelope Asante</h2>
              <p>
                I will recommend DevTray for any student who wants the best of
                online education.
              </p>
            </div>
          </div>{" "}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide1" className="btn btn-circle glass text-white ">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MentorCard;
