import React, { useEffect, useState } from "react";

import Foodcard from "./FoodCard";

export default function Dashboard({ username }) {
  const [data, setData] = useState();
  // geting data from api and storing it in state
  async function getData() {
    const getdata = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    ).then((res) => res.json());
    setData(getdata);
  }
  // using effct to make get data fucntion run when the first time page is rendere
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex-manage">
      {data ? (
        data.map((props) => (
          <Foodcard item={props} username={username} key={props.id} />
        ))
      ) : (
        <h1 style={{ color: "white" }}>Loading...</h1>
      )}
    </div>
  );
}
