import React, { useEffect, useState } from "react";
import Radios from "./Radios";
export default function Foodcard({item,rankers}) {
  const [newclass, setNone] = useState("checkbox-hide");

  const newImage =
  item.image.substring(0, item.image.length - 4) +
    item.dishName.replace(/\s+/g, "").toLowerCase();

  function giveRank() {
    setNone("checkbox-container");
  }
  function changeBtn() {
    setNone("checkbox-hide");
  }
  // useEffect(() => {}, [giveRank]);
  return (
    <>
      <figure className="snip1527">
        <div className="image">
          <img src={newImage} alt={item.dishName} />
        </div>
        <figcaption>
          <h3>{item.dishName}</h3>
          <p>{item.description}</p>
          <button className="btn mt-2 mb-0 btn-primary" onClick={giveRank}>
            Give Rating
          </button>
        </figcaption>
      </figure>
      <Radios
        none={newclass}
       item={item}
        setNone={setNone}
        changeBtn={changeBtn}
        rankers={rankers}
      />
    </>
  );
}
