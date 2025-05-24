import React from "react";
import { useEffect, useState } from 'react';
import '../src/screen_loading.css';

function Pattern() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // La pantalla de carga se ocultará después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? '' : 'hidden'}`}>
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Pattern;