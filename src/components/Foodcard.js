import React from "react";
export default function Foodcard({ id, dishName, desciption, image }) {
  const newImage = image.substring(0, image.length - 4) + dishName;
  console.log(desciption);
  return (
    <>
      <figure className="snip1527">
        <div className="image">
          <img src={newImage} alt={dishName} />
        </div>
        <figcaption>
          <div className="date">
            <span className="day">{id}</span>
          </div>
          <h3>{dishName}</h3>
          <p>{desciption}</p>
        </figcaption>
      </figure>
    </>
  );
}
