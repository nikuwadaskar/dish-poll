import React, { useEffect, useState } from "react";
import FoodcardRanker from "./FoodcardRanker";
import Foodcard from "./FoodCard";

export default function Dashboard() {
  const [data, setData] = useState();
  async function getData() {
    const getdata = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    ).then((res) => res.json());
    setData(getdata);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? (
        data.map(({ id, dishName, description, image }) => (
          <Foodcard
            key={id}
            id={id}
            dishName={dishName}
            desciption={description}
            image={image}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
