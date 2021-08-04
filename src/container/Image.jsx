import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../services/getCharacter';

export default function Image() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { _id } =  useParams();
  
  useEffect(async () => {
    const characterImage = await getCharacter(_id);
    setImage(characterImage.image);
    setLoading(false);
  });

  if(loading) return <h1>Finding Image...</h1>;
  
  return (
    <img src={image} alt="character" />
  );
}
