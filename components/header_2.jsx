// import { useState } from 'react';

const Header_2 = () => {
  return (
    <div className="header-wrapper">
      {/* Elementos decorativos de fondo */}
      <div className="bg-decoration circle-top-left"></div>
      <div className="bg-decoration circle-right"></div>
      <div className="bg-decoration wave-line"></div>
      <div className="bg-decoration duster-icon"></div>
      
      {/* Header principal */}
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
            <p>Mrs. Maribel Vega Pérez</p>
            <p>Phone: 447460269707</p>
            <p>Email: marilynvepe@hotmail.com</p>
          </div>
        </div>
      </header>
      
      <style jsx>{`
        .header-wrapper {
          position: relative;
          padding: 20px;
          overflow: hidden;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        
        /* Elementos decorativos de fondo */
        .bg-decoration {
          position: absolute;
          z-index: -1;
        }
        
        .circle-top-left {
          width: 150px;
          height: 150px;
          background-color: #f8b8b9;
          opacity: 0.5;
          border-radius: 50%;
          top: -50px;
          left: -50px;
        }
        
        .circle-right {
          width: 180px;
          height: 180px;
          border: 2px solid #f8b8b9;
          border-radius: 50%;
          top: 30px;
          right: -90px;
          opacity: 0.4;
        }
        
        .wave-line {
          width: 100%;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff' fill-opacity='0.1'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.2;
        }
        
        .duster-icon {
          width: 100px;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z' fill='%23f8b8b9' fill-opacity='0.3'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
          bottom: 20px;
          right: 30px;
          opacity: 0.3;
        }
        
        /* Header principal */
        .header-container {
          background: linear-gradient(135deg, #5d4d7a, #3f3857);
          padding: 30px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border-radius: 15px;
          position: relative;
          z-index: 1;
        }
        
        .logo-text {
          flex-grow: 1;
        }
        
        .company-name {
          font-family: 'Comic Relief', system-ui, sans-serif;
          font-size: 2.5em;
          margin: 0;
          color: #F8B8B9;
          font-weight: bold;
          line-height: 1.2;
        }
        
        .address {
          margin: 10px 0 0 0;
          font-weight: bold;
          font-size: 1.2em;
          color: #ffa69e;
        }
        
        .address-line {
          display: block;
          margin-bottom: 5px;
        }
        
        .contact-info {
          margin-top: 15px;
          font-size: 0.9em;
          color: #fdfdfd;
        }
        
        .contact-info p {
          margin: 5px 0;
        }
        
        .logo-icon {
          margin-right: 20px;
          color: #F8B8B9;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background-color: #3f3857;
          border-radius: 50%;
          border: 2px solid #F8B8B9;
        }
        
        .slogan {
          font-style: italic;
          font-size: 1em;
          margin-top: 15px;
          color: #fdfdfd;
          font-weight: bold;
        }
        
        /* Línea decorativa */
        .decorative-line {
          width: 150px;
          height: 3px;
          background-color: #F8B8B9;
          margin: 15px 0;
        }
        
        /* Icono de tintorería */
        .hanger-icon {
          width: 50px;
          height: 50px;
          fill: #F8B8B9;
        }
        
        /* Responsive para dispositivos pequeños */
        @media (max-width: 600px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }
          
          .logo-icon {
            margin: 0 0 20px 0;
          }
          
          .decorative-line {
            margin: 15px auto;
          }
          
          .bg-decoration {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default Header_2;