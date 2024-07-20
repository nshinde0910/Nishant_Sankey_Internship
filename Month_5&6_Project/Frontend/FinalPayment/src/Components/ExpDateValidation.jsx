import React from "react";
import "../../src/index.css"; //Frontend\FinalPayment\src\index.css
import "../../src/global.css";

const ExpDateValidation = () => (
  <div className="exp-date-validation">
    <input
      type="text"
      placeholder="Exp Date (MM/YY)"
      className="exp-date-input"
    />
  </div>
);

export default ExpDateValidation;
