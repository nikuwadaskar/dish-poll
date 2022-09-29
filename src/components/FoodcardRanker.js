import React from "react";
export default function FoodcardRanker({ username }) {
  let baseUrl = "https://loremflickr.com/300/300/";
  // setting creating relevent username to extract related data from local storage
  const first = "first" + username;
  const second = "second" + username;
  const third = "third" + username;
  // getting data from local storage and storing in array so that we can map over it 
  const rankers = [
    JSON.parse(localStorage.getItem(first)),
    JSON.parse(localStorage.getItem(second)),
    JSON.parse(localStorage.getItem(third)),
  ];

  return (
    <>
    {/* setting user name */}
      {username === "Guest" ? (
        <h1 style={{ color: "white" }}>Go Log In First</h1>
      ) : (
        <h1 style={{ color: "white" }}>
          Top {rankers.length} of {username}
        </h1>
      )}
      <div className="container">
      {/* mapping over data got from local storage */}
        {rankers.map((e) => {
          if (e && e.username === username) {
            return (
              <div key={e.id}>
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
          {/* this return statement staisfy the need of returning something from map function while above return is nestated return so thats why we need this */}
          return null;
        })}
      </div>
    </>
  );
}
