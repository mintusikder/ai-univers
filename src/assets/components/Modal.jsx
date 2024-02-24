import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { image_link, description, features, tool_name } = props.singleData;

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">{description}</h2>

              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Feaures</h1>
                  {Object.values(features || {}).map((value) => (
                    <li>{value.feature_name}</li>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                </div>
              </div>
            </div>
            <figure>
              <img
                className="w-full h-64"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
