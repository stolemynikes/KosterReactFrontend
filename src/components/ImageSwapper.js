import { useEffect, useState } from 'react';
import React from 'react';

//styling
import '../styles/_image.scss'

import KosterFoto1 from '../assets/images/KosterFotosCompressed/KosterbarFoto1.jpg'
import KosterFoto6 from '../assets/images/KosterFotosCompressed/KosterbarFoto6.jpg'
import KosterFoto7 from '../assets/images/KosterFotosCompressed/KosterbarFoto7.jpg'
import KosterFoto8 from '../assets/images/KosterFotosCompressed/KosterbarFoto8.jpg'
import KosterFoto9 from '../assets/images/KosterFotosCompressed/KosterbarFoto9.jpg'
import KosterFoto10 from '../assets/images/KosterFotosCompressed/KosterbarFoto10.jpg'
import KosterFoto11 from '../assets/images/KosterFotosCompressed/KosterbarFoto11.jpg'
import KosterFoto12 from '../assets/images/KosterFotosCompressed/KosterbarFoto12.jpg'
import KosterFoto13 from '../assets/images/KosterFotosCompressed/KosterbarFoto13.jpg'
import KosterFoto14 from '../assets/images/KosterFotosCompressed/KosterbarFoto14.jpg'
import KosterFoto15 from '../assets/images/KosterFotosCompressed/KosterbarFoto15.webp'
import KosterFoto16 from '../assets/images/KosterFotosCompressed/KosterbarFoto16.jpg'
import KosterFoto17 from '../assets/images/KosterFotosCompressed/KosterbarFoto17.jpg'
import KosterFoto21 from '../assets/images/KosterFotosCompressed/KosterbarFoto21.jpg'
import KosterFoto22 from '../assets/images/KosterFotosCompressed/KosterbarFoto22.jpg'

const ImagesQuery = [
  {
    id: 1, src:KosterFoto1, title: 'KosterbarFoto1'
  },
  {
    id: 2, src:KosterFoto6, title: 'KosterbarFoto6'
  },
  {
    id: 3, src:KosterFoto7, title: 'KosterbarFoto7'
  },
  {
    id: 4, src:KosterFoto8, title: 'KosterbarFoto8'
  },
  {
    id: 5, src:KosterFoto9, title: 'KosterbarFoto9'
  },
  {
    id: 6, src:KosterFoto10, title: 'KosterbarFoto10'
  },
  {
    id: 7, src:KosterFoto11, title: 'KosterbarFoto11'
  },
  {
    id: 8, src:KosterFoto12, title: 'KosterbarFoto12'
  },
  {
    id: 9, src:KosterFoto13, title: 'KosterbarFoto13'
  },
  {
    id: 10, src:KosterFoto14, title: 'KosterbarFoto14'
  },
  {
    id: 11,  src:KosterFoto15, title: 'KosterbarFoto15'
  },
  {
    id: 12, src:KosterFoto16, title: 'KosterbarFoto16'
  },
  {
    id: 13, src:KosterFoto17, title: 'KosterbarFoto17'
  },
  {
    id: 14, src:KosterFoto21, title: 'KosterbarFoto21'
  },
  {
    id: 15, src:KosterFoto22, title: 'KosterbarFoto22'
  },

]



export default function ImageSwapper() {

const [activeId, setActiveId] = useState(ImagesQuery[0].id);

useEffect(() => {
  const intervalId = setInterval(() => {
    const currentActiveIndex = ImagesQuery.findIndex(
      (image) => image.id === activeId
    );
    const nextActiveIndex =
      currentActiveIndex === ImagesQuery.length - 1 ? 0 : currentActiveIndex + 1;
    setActiveId(ImagesQuery[nextActiveIndex].id);
  }, 8000);
  return () => clearInterval(intervalId);
}, [activeId]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setActiveId(ImagesQuery[1].id);
  }, 8000);
  return () => clearTimeout(timeoutId);
}, []);


return (
  <div className='ImageContainer'>
    {ImagesQuery.map((image) => (
      <img
        key={image.id}
        src={image.src}
        alt={image.title}
        className={` ${image.id === activeId ? "active" : ""}`}
        
      />
    ))}

    <div>

    <p>&ldquo;Ik sta op het punt om te blijven&rdquo;</p>
    
    </div>

  </div>
);
}
