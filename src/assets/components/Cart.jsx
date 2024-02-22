// import React from 'react';

import { useEffect, useState } from "react";
import SingleData from "./SingleData";
import Button from "./Button";

const Cart = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handelshowAll = () => {
    console.log("hrllo");
    setShowAll(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      //   console.log(data.data.tools)
      setData(data.data.tools);
    };
    // console.log(data);
    loadData();
  }, []);
  return (
    <>
      <div className="lg:p-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          data
            .slice(0, showAll ? 12 : 6)
            .map((singleData) => (
              <SingleData
                key={singleData.id}
                singleData={singleData}
              ></SingleData>
            ))}
      </div>
      {!showAll && (
        <span onClick={handelshowAll}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default Cart;
