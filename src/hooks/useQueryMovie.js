const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
};
const useQueryMovie = () => {
  const data = [
    "Transformers",
    "Batman",
    "Avengers",
    "Titanic",
    "Avatar",
    "Star Wars",
    "Furious",
    "Frozen",
    "Panther",
    "Iron Man",
    "Minions",
    "Toy Story",
    "Captain America",
    "Marvel",
    "Joker",
    "Super Mario",
    "Venom",
    "Runner",
  ];
  return shuffleArray(data);
};

export default useQueryMovie;
