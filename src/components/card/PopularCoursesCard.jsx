import React from "react";

function PopularCoursesCard({ title, tag, image }) {
  return (
    <div className="card hover:bg-black/50 hover:scale-105 ease-in duration-300 w-full shadow-xl mb-4 glass">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <div className="badge py-4 badge-secondary">{tag}</div>
        <h2 className="card-title ">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-blue-600 p-2 py- mt-4 border-blue-600 hover:bg-blue-600 hover:border-blue-600">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default PopularCoursesCard;
