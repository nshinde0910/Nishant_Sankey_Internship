import React from "react";
import "../../src/index.css"; //Frontend\FinalPayment\src\index.css
import "../../src/global.css";

const CardValidation = () => (
  <div className="card-validation">
    <input
      type="text"
      placeholder="Card Number"
      className="card-number-input"
    />
  </div>
);

export default CardValidation;
