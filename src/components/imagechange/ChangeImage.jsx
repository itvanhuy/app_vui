import React, { useState } from 'react';

function Changeimage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://picsum.photos/200/200?1',
    'https://picsum.photos/200/200?2',
    'https://picsum.photos/200/200?3'
  ];

 function prevImage() {
  if (imageIndex === 0) {
    setImageIndex(images.length - 1);
  } else {
    setImageIndex(imageIndex - 1);
  }
}

function nextImage() {
  if (imageIndex === images.length - 1) {
    setImageIndex(0);
  } else {
    setImageIndex(imageIndex + 1);
  }
}
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Ảnh {imageIndex + 1}</h1>
      <img src={images[imageIndex]} alt="gallery" />
      <br />
      <button onClick={prevImage}>Trước</button>
      <button onClick={nextImage} style={{ marginLeft: '10px' }}>Sau</button>
    </div>
  );
}

export default Changeimage;