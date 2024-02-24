import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
import Button from "./Button";
import Modal from "./Modal";

const Cart = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [uniqueid, setuniqueid] = useState(null);

  const loadData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const jsonData = await res.json();
    setData(jsonData.data.tools);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
    setData(sortedData);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueid}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueid]);

  return (
    <>
      <span onClick={handleSort}><Button>Sort By Date</Button></span>
      <div className="lg:p-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            key={singleData.id}
            singleData={singleData}
            setuniqueid={setuniqueid}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData}></Modal>
    </>
  );
};

export default Cart;
