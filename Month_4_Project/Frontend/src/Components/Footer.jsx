import React from "react";
import "../../src/index.css"; //Frontend\FinalPayment\src\index.css
import "../../src/global.css";

const Footer = () => (
  <footer class="footerfinal">
    {/* <!-- Part-1 --> */}
    <div class="customer-service">
      <div class="footer">
        <div class="base"></div>
        <div class="auto-layout-the-whole-episode">
          <div class="auto-layout-about-us">
            <b class="customer-service1">About Us</b>
            <div class="our-story">Our Story</div>
            <div class="work-with-us">Work with us</div>
            <div class="press-media">Press & media</div>
            <div class="privacy-security">Privacy & Security</div>
          </div>
          <div class="headquarters">
            <div class="auto-layout-we-offer">
              <b class="we-offer">We Offer</b>
              <div class="trip-sponsorship">Trip Sponsorship</div>
              <div class="last-minutes-flights1">Last Minutes Flights</div>
              <div class="best-deals">Best Deals</div>
              <div class="ai-driven-search">AI-Driven Search</div>
            </div>
          </div>
          <div class="headquarters1">
            <div class="auto-layout-headquarters">
              <b class="headquarters2">Headquarters</b>
              <div class="england1">England</div>
              <div class="france">France</div>
              <div class="canada">Canada</div>
              <div class="iceland">Iceland</div>
            </div>
          </div>
          <div class="headquarters3">
            <div class="auto-layout-travel-blogs">
              <b class="travel-blogs">Travel Blogs</b>
              <div class="bali-travel-guide">Bali Travel Guide</div>
              <div class="sri-travel-guide">Sri Travel Guide</div>
              <div class="peru-travel-guide">Peru Travel Guide</div>
              <div class="swiss-travel-guide">Swiss Travel Guide</div>
            </div>
          </div>
          <div class="auto-layout-activities">
            <b class="activities">Activities</b>
            <div class="tour-leading">Tour Leading</div>
            <div class="cruising-sailing">Cruising & sailing</div>
            <div class="camping">Camping</div>
            <div class="kayaking">Kayaking</div>
          </div>
          <div class="auto-layou-service">
            <b class="service">Service</b>
            <div class="report-error">Report Error</div>
            <div class="ask-online">Ask online</div>
            <div class="travel-insurance">Travel insurance</div>
          </div>
        </div>
        <div class="payment-methods-parent">
          <div class="payment-methods">
            <button class="visa-card1">
              <img
                class="visa-logo-icon"
                alt=""
                src="../src/assets/visalogo1.svg"
              />
            </button>
            <img
              class="amex-icon"
              loading="eager"
              alt=""
              src="../src/assets/amex1@2x.png"
            />

            <div class="master-card">
              <img
                class="internationalbankmasterrcard-icon"
                loading="eager"
                alt=""
                src="../src/assets/internationalbankmasterrcard1@2x.png"
              />
            </div>
            <div class="paypal">
              <img
                class="international-icon"
                loading="eager"
                alt=""
                src="../src/assets/international1@2x.png"
              />
            </div>
          </div>
          <div class="social-networks-linkedin-teleg">
            <div class="social-networks1">
              <img
                class="linkedin-icon footer-icon"
                loading="eager"
                alt=""
                src="../src/assets/-linkedin.svg"
              />

              <img
                class="telegram-icon footer-icon"
                loading="eager"
                alt=""
                src="../src/assets/-telegram.svg"
              />

              <img
                class="twitter-icon footer-icon"
                loading="eager"
                alt=""
                src="../src/assets/-twitter.svg"
              />

              <img
                class="facebook-icon footer-icon"
                loading="eager"
                alt=""
                src="../src/assets/facebook.svg"
              />

              <img
                class="instagram-icon footer-icon"
                loading="eager"
                alt=""
                src="../src/assets/-instagram.svg"
              />
            </div>
          </div>
          <div class="send-an-email">
            <div class="input11">
              <div class="e-mail-text">
                <div class="title6">Email</div>
              </div>
              <div class="auto-layout-input">
                <div class="text16">
                  <img
                    class="iconsofficemail"
                    alt=""
                    src="../src/assets/iconsofficemail1.svg"
                  />
                  <input
                    class="enter-yout-email"
                    placeholder="enter your email"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div class="confirm-button3">
              <div class="button4">
                <button class="subs-button">
                  <div class="text18">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Part-2 --> */}
    <div class="framefooter">
      <div class="underthefootertitle">
        <div class="frame-footer1">
          <div class="under-the-footer-title">
            <div class="text-1">
              <div class="icon2">
                <img
                  class="iconscharactercopyright"
                  alt=""
                  src="../src/assets/iconscharactercopyright.svg"
                />
              </div>
              <div class="copyright-easyset24">Copyright EasySet24</div>
            </div>
            <div class="text-2">
              <div class="icon3">
                <img
                  class="iconsofficeemail-down"
                  alt=""
                  src="../src/assets/iconsofficeemaildown.svg"
                />
              </div>
              <div class="easyset24gmailcom">easyset24@gmail.com</div>
            </div>
            <b class="easyset24-seamless-journeys">
              "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"
            </b>
            <div class="text-3">
              <img
                class="iconstravelslocal-two"
                alt=""
                src="../src/assets/iconstravelslocaltwo.svg"
              />

              <div class="oxford-streetlondon">123 Oxford Street,London</div>
            </div>
            <div class="text-4">
              <div class="icon4">
                <img
                  class="iconscommunicatephone-call"
                  alt=""
                  src="../src/assets/iconscommunicatephonecall1.svg"
                />
              </div>
              <div class="phone">
                <div class="phone1">+44 20 7123 4567</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
