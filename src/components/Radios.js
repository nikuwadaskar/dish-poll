// import { cleanup } from "@testing-library/react";
import React from "react";

export default function Radios({ none, item, changeBtn,username}) {

  function displayRadioValue() {
    var elem = document.getElementsByName("rank");

    for (let i = 0; i < elem.length; i++) {
      if (elem[i].checked) {
        const value=elem[i].value
        const userStorage=elem[i].value+username;
        item={...item,value,username}
        localStorage.setItem(userStorage,JSON.stringify(item))
      }
    }
    changeBtn();
  }
  return (
    <div>
      <div id="checkbox" className={none}>
        <h1>{item.dishName}</h1>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="rank"
            id="flexRadioDefault1"
            value="first"
            data-id={item.id}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Rank One (30 Points)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="rank"
            id="flexRadioDefault2"
            value="second"
            data-id={item.id}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Rank Two (20 Points)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="rank"
            id="flexRadioDefault2"
            value="third"
            data-id={item.id}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Rank Three (10 Points)
          </label>
          <br />
          <button
            type="submit"
            className="btn mt-2 mb-0 btn-primary"
            onClick={displayRadioValue}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
