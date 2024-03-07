function cakes(recipe, available) {
  let count = 0;
  while (true) {
    let arr = [];
    for (const key in recipe) {
      available[key] -= recipe[key];
      if (available[key] >= 0) {
        arr.push(1);
        continue;
      }
      arr.push(0);
    }
    if (arr.filter((el) => el === 0).length >= 1) {
      break;
    } else {
      count += 1;
    }
  }

  return count;
}

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available));
