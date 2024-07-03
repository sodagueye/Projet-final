import React from 'react';
import { useParams } from 'react-router-dom';

const imagesData = [
  { id: 1, url: 'image1.jpg', category: 'boissons' },
  { id: 2, url: 'image2.jpg', category: 'Burgess' },
  { id: 3, url: 'image3.jpg', category: 'plats sénégalais' },
  { id: 4, url: 'image4.jpg', category: 'cuisine d’ailleurs' },
  { id: 5, url: 'image5.jpg', category: 'desserts' },
];

function Category() {
  const { category } = useParams();

  const filteredImages = imagesData.filter(image => image.category === category);
  console.log(filteredImages);

  return (
    <div>
      <h1>Category: {category} </h1>
      <div>
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <img key={image.id} src={image.url} alt={image.category} />
          ))
        ) : (
          <p>No images found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Category;
