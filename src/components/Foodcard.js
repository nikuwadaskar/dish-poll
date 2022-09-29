import React, { memo, useState } from "react";
import Radios from "./Radios";
function Foodcard({ item, username }) {
  const [newclass, setNone] = useState("checkbox-hide");
  // creating relevant image we image urlso that relevant image gets loaded 
  const newImage =
    item.image.substring(0, item.image.length - 4) +
    item.dishName.replace(/\s+/g, "").toLowerCase();
// setting visibility of checkbox iusing states
  function giveRank() {
    setNone("checkbox-container");
  }
  function changeBtn() {
    setNone("checkbox-hide");
  }
  return (
    <>
      <figure className="snip1527">
        <div className="image">
          <img src={newImage} alt={item.dishName} />
        </div>
        <figcaption>
          <h3>{item.dishName}</h3>
          <p>{item.description}</p>
          <button className="btn mb-0 btn-primary" onClick={giveRank}>
            Give Rating
          </button>
        </figcaption>
      </figure>
      <Radios
        none={newclass}
        item={item}
        setNone={setNone}
        changeBtn={changeBtn}
        username={username}
      />
    </>
  );
}

export default memo(Foodcard);
