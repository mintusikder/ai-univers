// import React from 'react';

import { useEffect, useState } from "react";
import SingleData from "./SingleData";

const Cart = () => {
  const [data, setData] = useState([]);

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
        {data.map((singleData) => (
          <SingleData key={singleData.id} singleData={singleData}></SingleData>
        ))}
      </div>
    </>
  );
};

export default Cart;
