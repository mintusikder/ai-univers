import React from "react";

const Modal = (props) => {
  // Destructure props
  const { image_link, description, features, integrations } = props?.singleData;

  return (
    <div>
      {/* Modal trigger checkbox */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      {/* Modal container */}
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
              {/* Modal title */}
              <h2 className="card-title">{description}</h2>

              <div className="flex justify-between">
                <div>
                  {/* Features */}
                  <h1 className="text-xl font-bold">Features</h1>
                  <ul>
                    {Object.values(features || {})?.map((value, index) => (
                      <li key={index}>{value.feature_name}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Integrations */}
                  <h1 className="text-xl font-bold">Integrations</h1>
                  <ul>
                    {integrations &&
                      integrations?.map((inte, index) => (
                        <li key={index}>{inte}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Modal image */}
            <figure className="w-full">
              <img
                className="w-full h-64"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          {/* Modal close button */}
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
