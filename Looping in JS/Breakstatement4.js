//Break Statement in NESTED loop

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
