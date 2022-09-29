import React, { useEffect, useState } from "react";

import Foodcard from "./FoodCard";

export default function Dashboard({ username }) {
  const [data, setData] = useState();

  async function getData() {
    const getdata = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    ).then((res) => res.json());
    setData(getdata);
  }

  localStorage.setItem("name", username);

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
        <h1>Loading...</h1>
      )}
    </div>
  );
}
