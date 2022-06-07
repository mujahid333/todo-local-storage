import React from "react";

export const Brand = () => {
  return (
    <>
      <div className="brand">
        <h2>Brands Everyone Will Love</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="brand-parent">
          <div className="brand-child">
            <img src="/hero.jpg" alt="No IMG" />
          </div>
          <div className="brand-child">
            <img src="/hero.jpg" alt="No IMG" />
          </div>
          <div className="brand-child">
            <img src="/hero.jpg" alt="No IMG" />
          </div>
          <div className="brand-child">
            <img src="/hero.jpg" alt="No IMG" />
          </div>
        </div>
        <button className="brand-btn">START YOUR REGISTRY</button>
      </div>
    </>
  );
};
