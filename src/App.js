import React from 'react';
import './style.css';
import Car from './Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6 de NASCAR"
        imagen="https://img.maspormas.com/2017/06/Cars.gif"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        style={{ margin: '6px' }}
        sonido= "Ku-chow"
        anio= "2006"
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://i.pinimg.com/474x/91/2e/d4/912ed4ffcee5c4e018f7ad412cfac861.jpg"
        descripcion="El Compañero fiel del auto veloz de la pelicula Cars."
        style={{ margin: '6px' }}
        sonido= "Mate Tom-Mate"
        anio= "1960"
      />
    </div>
  );
}