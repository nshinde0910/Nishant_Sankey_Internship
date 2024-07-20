import React, { useState, useEffect, useRef } from "react";
import "../../src/index.css";
import "../../src/global.css";

const FinalPaymentBody = () => {
  const [expDate, setExpDate] = useState("");
  const [expDateError, setExpDateError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const bottomMarkerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          window.alert("You have reached the end of the page!");
        }
      },
      { threshold: 0.1 }
    );

    if (bottomMarkerRef.current) {
      observer.observe(bottomMarkerRef.current);
    }

    return () => {
      if (bottomMarkerRef.current) {
        observer.unobserve(bottomMarkerRef.current);
      }
    };
  }, []);

  const validateExpDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test(value)) {
      setExpDateError("Invalid Date 📅");
      return false;
    }

    const today = new Date();
    const [month, year] = value.split("/");
    const cardDate = new Date(`20${year}`, month - 1); // assuming '20' prefix for year

    if (cardDate < today) {
      setExpDateError("Invalid Date 📅");
      return false;
    }

    setExpDateError("");
    return true;
  };

  const handleExpDateChange = (event) => {
    let { value } = event.target;

    value = value.replace(/[^\d]/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpDate(value);

    validateExpDate(value);
  };

  const handleCardNumberChange = (event) => {
    let { value } = event.target;

    value = value.replace(/[^\d]/g, "");

    setCardNumber(value);

    if (value.length !== 16) {
      setCardNumberError("Card number must be 16 digits 💳");
    } else {
      setCardNumberError("");
    }
  };

  const handleCvcChange = (event) => {
    let { value } = event.target;

    value = value.replace(/[^\d]/g, "");

    setCvc(value);

    if (value.length !== 3) {
      setCvcError("CVC must be 3 digits");
    } else {
      setCvcError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isExpDateValid = validateExpDate(expDate);

    const isCardNumberValid = cardNumber.length === 16;
    const isCvcValid = cvc.length === 3;

    if (isExpDateValid && isCardNumberValid && isCvcValid) {
      const formData = new FormData(event.target);
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      event.target.submit();
    } else {
      let errorMessage = "";
      if (!isExpDateValid) {
        errorMessage += "Invalid Expiration Date.\n";
      }
      if (!isCardNumberValid) {
        errorMessage += "Invalid Card Number.\n";
      }
      if (!isCvcValid) {
        errorMessage += "Invalid CVC.\n";
      }

      // Display the error message in a dialog box
      if (errorMessage !== "") {
        window.alert(errorMessage);
      }
    }
  };

  return (
    <div className="final-payment-body">
      <div className="final-payment1">
        {/* <!-- left side --> */}
        <div className="social-networks">
          {/* <!-- Left-1 --> */}
          <div className="information-you-need-to-pay-at-parent">
            <h3 className="information-you-need">
              Information You need to pay attention .
            </h3>
            <div className="passengers-please-check">
              <div className="passengers-are-divided">
                Passengers are divided according to age categories .
              </div>
              <div className="please-check-categories">
                Please Check Categories
              </div>
            </div>
          </div>
          {/* <!-- Left-2 --> */}
          <div className="button-frame">
            {/* <!-- left-2-1 --> */}
            <div className="ticket">
              <div className="date">
                <b className="date-1">One stop, 3h Between</b>
                <div className="date-2">
                  Flight Duration &nbsp;<b className="h h1 span">9: 45h</b>
                </div>
              </div>
            </div>
            {/* <!-- left-2-2 --> */}
            <div className="photo">
              <div className="photo1">
                {/* <!-- Flight-1 --> */}
                <hr />
                <div className="info-up">
                  <div className="first-flight-no-container">
                    First flight no From Stockholm
                    <b>C650</b>
                  </div>
                  <div className="travelinsurance-frame">
                    <div className="delta-logo">
                      <img
                        className="social-networks-frame"
                        loading="eager"
                        alt=""
                        src="../src/assets/Delta Logo.svg"
                      />
                    </div>
                    <b className="delta-airlines">Delta Airlines</b>
                  </div>
                </div>
                {/* <!-- Flight-2 --> */}
                <hr />
                <div className="info-down">
                  <div className="second-flight-no-container">
                    Second flight no From Rome
                    <b>JSG113</b>
                  </div>
                  <img
                    className="vuesaxoutlinetick-square-icon1"
                    alt=""
                    src="../src/assets/vuesaxoutlineticksquare1.svg"
                  />
                  <div className="frame-footer-title">
                    <div className="airline-logo-turkish-airlines-">
                      <div className="turkish-ailines-logo">
                        <img
                          className="text-input-icon"
                          alt=""
                          src="../src/assets/Turkish Airlines Logo.svg"
                        />
                      </div>
                    </div>
                    <b className="turkish-airways">Turkish Airways</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Left-3 --> */}
          {/* <!-- Left-3-1 --> */}
          <div className="your-trip-summary-parent">
            <h3 className="your-trip-summary">Your Trip Summary</h3>
            <div className="visa-card">
              <div className="your-flight-take">
                Your flight take off from ARN Gate 23A , you Enter through C
                Entrance.
              </div>
              <div className="in-fco-airport">
                In FCO Airport in Rome You will stay 3h &45m then Exit through
                Gate D14 .
              </div>
              <div className="final-destination-will">
                Final Destination will be SABIHA Airport and You can Exit
                Through L Door .
              </div>
            </div>
          </div>
          {/* <!-- Left-3-2 --> */}
          <div className="reviws">
            <div className="very-good">
              <div className="very-good-container">
                <b>Very Good</b>
                <span className="reviews"> , 2.259 Reviews</span>
              </div>
              <div className="icon">
                <img
                  className="icon-child"
                  alt=""
                  src="../src/assets/Icon-child.svg"
                />
              </div>
            </div>
            <div className="level">
              <div className="level1">
                <div className="leaf">
                  <img
                    className="iconsothersleaves-2"
                    alt=""
                    src="../src/assets/iconsothersleaves21.svg"
                  />
                </div>
                <div className="sustainability-level">Sustainability Level</div>
              </div>
              <div className="icon1">
                <img
                  className="icon-child"
                  alt=""
                  src="../src/assets/Icon-child.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- right side --> */}
        <div className="right-text">
          <div className="right-text-up">
            {/* <!-- Right-1 --> */}
            <div className="payment-metod">
              <h3 className="payment-methods-and">
                Payment Methods and Information
              </h3>
              <div className="price">
                <div className="price-details">
                  <b className="price-details1">Price Details</b>
                </div>
                <div className="prices">
                  <div className="p1">
                    <div className="confirm-button">
                      <div className="frame-footer">$ 87</div>
                      <div className="adults">2 Adults</div>
                    </div>
                    <div className="confirm-button1">
                      <div className="div">$ 24</div>
                      <div className="children">3 Children</div>
                    </div>
                    <div className="confirm-button2">
                      <div className="div1">$ 12</div>
                      <div className="infants">1 Infants</div>
                    </div>
                  </div>
                  <div className="p2">
                    <div className="total">
                      <b className="total-usd">Total (USD)</b>
                    </div>
                    <b className="autolayout">$ 157</b>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Right-2 --> */}
            <div className="inputs">
              <div className="booked">
                <div className="booking-for-work">
                  <input
                    type="radio"
                    className="radio-button"
                    id="myRadioButton"
                  />
                  <b
                    onClick="toggleRadioButton()"
                    className="booking-for-work1"
                  >
                    Booking For Work
                  </b>
                </div>
                <div className="payment-method">
                  <div className="payment">
                    <b className="payment-method1">Payment Method</b>
                  </div>
                  <div className="p-input">
                    <div className="input">
                      <div className="text-icon1">
                        <div className="text-icon2">
                          <img
                            className="paypal-icon"
                            alt=""
                            src="../src/assets/paypal.svg"
                          />
                        </div>
                        <img
                          className="iconseditdrop-down-list"
                          alt=""
                          src="../src/assets/iconseditdropdownlist1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- form --> */}
              <form
                id="form"
                onSubmit={handleSubmit}
                action="http://localhost:3000/submit-form"
                method="POST"
              >
                <div className="info-1">
                  <div className="info-11">
                    <div className="inputs1">
                      <div className="input1">
                        <div className="text-parent">
                          <div className="text3">
                            <div className="title1">
                              <span>First Name </span>
                              <span className="span3">*</span>
                            </div>
                          </div>
                          <div className="input2">
                            <input
                              id="fname"
                              name="fname"
                              className="anna"
                              placeholder="Name"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input3">
                        <div className="text5">
                          <div className="title2">
                            <span>Last Name </span>
                            <span className="span4">*</span>
                          </div>
                        </div>
                        <div className="input4">
                          <input
                            id="lname"
                            name="lname"
                            className="carinn"
                            placeholder="Lastname"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-48">
                      <div className="text7">
                        <div className="title3">
                          <span>Phone Number </span>
                          <span className="span5">*</span>
                        </div>
                      </div>
                      <div className="input5">
                        <div className="number">
                          <div className="number1">
                            <img
                              className="flags-se"
                              alt=""
                              src="../src/assets/india_flag.jpg"
                            />
                            <input
                              className="enter-your-emailgmailcom1"
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter Phone Number"
                              pattern="[0-9]{10}"
                              required
                            />
                          </div>
                          <img
                            className="iconsbasesearch"
                            alt=""
                            src="../src/assets/iconsbasesearch2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card details */}
                <div className="info-2">
                  {/* CARD-NUMBER */}
                  <div className="card-number">
                    <div className="cardgap input6">
                      <div className="text9">
                        <div className="title4">
                          <span>Card Number </span>
                          <span className="span6">*</span>
                        </div>
                      </div>
                      <div className="input7">
                        <div className="text-icon3">
                          <div className="text-icon4">
                            <img
                              className="iconsmoneybank-card"
                              alt=""
                              src="../src/assets/iconsmoneybankcard.svg"
                            />
                            <input
                              id="cardnumber"
                              name="cardnumber"
                              className="enter-your-emailgmailcom2"
                              placeholder=".............................................................."
                              type="text"
                              maxLength="16"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        id="validatecard"
                        className="text10"
                        style={{ display: cardNumberError ? "block" : "none" }}
                      >
                        {cardNumberError && (
                          <div className="information4">{cardNumberError}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* CVC */}
                  <div className="cvc">
                    <div className="cardgap cvc1">
                      <div className="text11">
                        <div className="title5">
                          <span>CVC </span>
                          <span className="span7">*</span>
                        </div>
                      </div>
                      <div className="input8">
                        <input
                          id="cvc"
                          name="cvc"
                          className="text-icon5"
                          placeholder="***"
                          type="text"
                          maxLength="3"
                          value={cvc}
                          onChange={handleCvcChange}
                          required
                        />
                      </div>
                      <div
                        id="validatecvc"
                        className="text12"
                        style={{ display: cvcError ? "block" : "none" }}
                      >
                        {cvcError && (
                          <div className="information5">{cvcError}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* EXP-DATE */}
                  <div className="cardgap exp-date">
                    <div className="input9">
                      <div className="swiss-travel-guide-container">
                        <span>EXP Date </span>
                        <span className="span8">* </span>
                      </div>
                    </div>
                    <div className="input10">
                      <input
                        id="exptdate"
                        name="exptdate"
                        className="text-icon6"
                        placeholder="MM/YY"
                        type="text"
                        value={expDate}
                        onChange={handleExpDateChange}
                        maxLength="5"
                        required
                      />
                    </div>
                    <div
                      id="validatedate"
                      className="text13"
                      style={{ display: expDateError ? "block" : "none" }}
                    >
                      {expDateError && (
                        <div className="information6">{expDateError}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* cancellation Policy */}
                <div className="right-text-center">
                  <h1 className="cancellation-policy">Cancellation Policy</h1>
                  <div className="text14">
                    <div className="get-a-full">
                      Get a Full Refund If You Cancel By Jun 23 (PDT) .
                    </div>
                    <div className="read-more">Read More ...</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="right-tex-down">
                  <div className="button1">
                    <button type="submit" className="button2">
                      <b className="parent-layout">Confirm and Pay</b>
                    </button>
                    <div className="check-your-information">
                      Check your information before submitting .
                    </div>
                  </div>
                </div>
              </form>
              <div
                id="bottom-marker"
                ref={bottomMarkerRef}
                style={{ height: "50px", backgroundColor: "red" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalPaymentBody;
