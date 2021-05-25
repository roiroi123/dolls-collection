import React from "react";
import "./DollCard.css";

function DollCard(props) {
  return (
    <div className="col-md-3 ">
      <div className="card shadow border-0 mb-4">
        <img className="card-img-top" src={props.imgUrl} height="250px" alt="barbie img"/>
        <div className="p-3 ">
          <h1 className="font-weight-medium mb-3">{props.name}</h1>
          <div className="my-5">
            <h1 className="pricing4">${props.price}</h1>

            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className=" ms-2 form-check-label">Got it</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DollCard;
