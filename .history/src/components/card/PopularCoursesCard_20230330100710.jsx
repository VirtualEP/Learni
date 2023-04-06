import React from "react";

function PopularCoursesCard({ title, tag, image, info }) {
  return (
    <div className="card hover:bg-black/50 hover:scale-105 ease-in duration-300 w-full shadow-xl mb-4">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <div className="badge py-4 badge-secondary">{tag}</div>
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enrol</button>
        </div>
      </div>
    </div>
  );
}

export default PopularCoursesCard;
