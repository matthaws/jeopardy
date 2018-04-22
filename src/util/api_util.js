export const fetchCategories = async () => {
  const randoOffset = Math.floor(Math.random() * 100);
  const response = await fetch(
    `http://jservice.io/api/categories?count=6&offset=${randoOffset}`
  );
  const categories = await response.json();
  return categories;
};

export const fetchQuestion = async (categoryId, questionValue) => {
  const response = await fetch(
    `http://jservice.io/api/clues?value=${questionValue}&category=${categoryId}`
  );
  const clue = await response.json();
  return clue;
};
