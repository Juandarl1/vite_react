import React from 'react';



const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-icon">
        <svg className="hanger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4a2 2 0 0 0-2 2c0 .7.37 1.31.92 1.66L6.08 13.96C5.17 15.4 6.17 17 7.84 17h8.32c1.67 0 2.67-1.6 1.76-3.04l-4.84-6.3c.55-.35.92-.96.92-1.66a2 2 0 0 0-2-2zm0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          <path d="M5 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H5v1z"/>
        </svg>
      </div>
      <div className="logo-text">
        <h1 className="company-name">DARYCLEANING LTD.</h1>
        <div className="decorative-line"></div>
        <div className="address">
          <span className="address-line">52 WEST GREENROAD</span>
          <span className="address-line">LONDON N15 5NR</span>
        </div>
        <div className="contact-info">
          <span className='name'>Mrs. Mirabel Vega Pérez<br/></span>
          <span className="contact-line">Phone: 447460269707 <br /> </span>
          <span className="contact-line">Email: marilynvepe@hotmail.com </span>
        </div>
      </div>
    </header>
  );
};

export default Header;