export const fetchPoster = () => {
  return fetch("/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
