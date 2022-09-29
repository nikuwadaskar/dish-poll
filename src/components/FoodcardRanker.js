import React from "react";
// import './css/FoodCardRanker.css'
export default function FoodcardRanker({ username }) {
  let baseUrl = "https://loremflickr.com/300/300/";
  const first = "first" + username;
  const second = "second" + username;
  const third = "third" + username;
  const rankers = [
    JSON.parse(localStorage.getItem(first)),
    JSON.parse(localStorage.getItem(second)),
    JSON.parse(localStorage.getItem(third)),
  ];

  return (
    <>
      <h1 style={{ color: "white" }}>{username=='Guest'?<h1>Go Log In First</h1>:<h1>Top three of {username}</h1>}</h1>
      <div className="container">
        {rankers.map((e) => {
          if (e &&e.username === username) {
            return (
              <div  key={e.id}>
                <div
                  style={{
                    backgroundImage: `url(${
                      baseUrl + e.dishName.replace(/\s+/g, "").toLowerCase()
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="card"
                >
                  <div className="content">
                    <h2>{e.value.toUpperCase()}</h2>
                    <h3>{e.dishName}</h3>
                    <p>{e.description}</p>
                   
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
     
    </>
  );
}
