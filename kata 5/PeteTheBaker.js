function cakes(recipe, available) {
  let countCakes;
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      const tempCakes = Math.floor(available[ingredient] / recipe[ingredient] || 0);
      if (!countCakes || tempCakes < countCakes) {
        countCakes = tempCakes;
      }
    } else {
      return 0;
    }
  }
  return countCakes;
}
