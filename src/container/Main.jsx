import React, { useState, useEffect } from 'react';
import List from '../components/List';
import { getList } from '../services/getList';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const characters = await getList();
    setCharacters(characters);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading.....</h1>;
  return <List characters={characters} />;
}
