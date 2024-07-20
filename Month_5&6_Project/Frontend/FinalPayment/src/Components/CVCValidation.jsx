import React from "react";
import "../../src/index.css"; //Frontend\FinalPayment\src\index.css
import "../../src/global.css";

const CVCValidation = () => (
  <div className="cvc-validation">
    <input type="text" placeholder="CVC" className="cvc-input" />
  </div>
);

export default CVCValidation;
