/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
export async function getList() {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  return json.map(({ _id, name }) => ({
    _id,
    name
  }));
}
