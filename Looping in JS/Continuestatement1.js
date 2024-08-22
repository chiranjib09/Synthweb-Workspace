//The continue statement is used within a loop to skip the current iteration and proceed to the next iteration.
//It's often employed to avoid unnecessary calculations or processing when certain conditions are met.

//Continue Statement in FOR loop

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}


