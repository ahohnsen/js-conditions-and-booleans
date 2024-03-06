// if/else - statements

let carrots = 2;
const dishesCleaned = 4;

const kidHelpsCleaningTheKitchen = dishesCleaned > 3;

if (kidHelpsCleaningTheKitchen) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}

console.log(carrots);

// Ternary Operator
// condition ? value if true : value if false

/*let carrots = 2;
const dishesCleaned = 2;

const kidHelpsCleaningTheKitchen = dishesCleaned > 3;

let extraCarrots = kidHelpsCleaningTheKitchen ? 2 : -1;

carrots = carrots + extraCarrots;

console.log(carrots);*/

// Type coercion - truthy and falsy

/*let carrots = 0;

if (carrots) {
  console.log("Give me the carrots already.");
}*/
