/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
export async function getCharacter(_id) {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`);
  const json = await res.json();
  return json;
}
