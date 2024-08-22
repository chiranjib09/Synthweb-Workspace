// Continue Statement in DO_WHILE Loop

let i = 0;

do {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
} while (i < 10);
