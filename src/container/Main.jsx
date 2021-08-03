import React, { useState, useEffect } from 'react';
import { List } from '../components/List';
import { getList } from '../services/getList';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacter] = useState([]);

  useEffect(async () => {
    const characters = await getList();
    await setCharacter(characters);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading.....</h1>;
  return <h1>hello</h1>;
}
