import React, { useEffect } from "react";
// import './css/FoodCardRanker.css'
export default function FoodcardRanker({ username, rankers }) {
  //     let baseUrl;

  //     if (rankers.first.image){

  //     }
  //   const cardTwo = {
  //     backgroundImage: `url(${
  //       rankers.second.image.substring(0, rankers.second.image.length - 4) +
  //       rankers.second.dishName.replace(/\s+/g, "").toLowerCase()
  //     })`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize:'cover'
  //   };
  //   const cardFirst = {
  //     backgroundImage: `url(${
  //       rankers.first.image.substring(0, rankers.first.image.length - 4) +
  //       rankers.first.dishName.replace(/\s+/g, "").toLowerCase()
  //     })`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize:'cover'

  //   };
  //   const cardThird = {
  //     backgroundImage: `url(${
  //       rankers.third.image.substring(0, rankers.third.image.length - 4) +
  //       rankers.third.dishName.replace(/\s+/g, "").toLowerCase()
  //     })`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize:'cover'
  //   };

  for (let i = 0; i < 3; i++) {}

  return (
    <>
      {Object.keys(rankers).map(() => {
        return (
          <div className="container">
            <div class="card">
              <div class="content">
                <h2>01</h2>
                <h3>Card One</h3>
                <p>{rankers.first.description}</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div>
        <div  class="container">
          <div style={cardFirst} class="card">
            <div class="content">
              <h2>01</h2>
              <h3>Card One</h3>
              <p>{rankers.first.description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div style={cardTwo} class="card">
            <div class="content">
              <h2>02</h2>
              <h3>Card Two</h3>
              <p>{rankers.second.description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div style={cardThird} class="card">
            <div class="content">
              <h2>03</h2>
              <h3>Card Three</h3>
              <p>{rankers.third.description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
