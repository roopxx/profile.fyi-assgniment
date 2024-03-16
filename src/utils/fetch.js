export const fetchPoster = () => {
  return fetch("src/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
