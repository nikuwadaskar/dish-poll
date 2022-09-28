import React, { useEffect, useState } from "react";
import FoodcardRanker from "./FoodcardRanker";
import Foodcard from "./FoodCard";

export default function Dashboard({ username, rankers }) {
  const [data, setData] = useState();
  const [newclass, setNone] = useState("checkbox-hide");
  async function getData() {
    const getdata = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    ).then((res) => res.json());
    setData(getdata);
  }

  rankers[username] = username;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((props) => (
          <Foodcard item={props} rankers={rankers} key={props.id} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <h1> {username}</h1>
      {/* <h1 > {fav}</h1> */}
    </div>
  );
}
