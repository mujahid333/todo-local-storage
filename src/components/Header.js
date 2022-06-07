import React from "react";

export const Header = () => {
  return (
    <>
      <div className="header-component">
        <div className="container">
          <div>
            {/* <img src=''/> */}
            <h2>LOGO</h2>
          </div>
          <div>
            <button className="login-btn">LOG IN</button>
            <button className="register-btn">START YOUR REGISTRY</button>
          </div>
        </div>
        <div className="discount-section">
          <div className="discount-container">
            <p className="offer"><strong>GET $25</strong> to spend at Zolo Plus <strong>20% OFF</strong> post-wedding when you sign up today*</p>
          </div>
        </div>
      </div>
    </>
  );
};