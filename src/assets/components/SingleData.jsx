// import React from 'react';
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
const SingleData = (props) => {
  const { name, image, features, published_in } = props.singleData;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full h-55" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Features</h2>
          {features.map((feature, index) => (
            <li>
              {index + 1}. {feature}
            </li>
          ))}
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold">{name}</p>
             
           <div className="flex">
           {" "}
                <span>
                  {" "}
                  <CalendarIcon className="h-6 w-6 text-blue-500" />
                </span>{" "} <p>
                {published_in}
              </p>
           </div>
            </div>
            <div className="card-actions justify-end">
              <ArrowRightIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
