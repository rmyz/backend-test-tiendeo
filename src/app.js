const readline = require("readline");
const {
  startingPosition,
  commands,
  inputLimits,
  printDrone
} = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "CONSOLE> "
});

let mode = 0;
let limits;
let initialPosition;
let actualDrone;
const drones = [];

console.log("Enter the map limits");
rl.prompt();

rl.on("line", line => {
  switch (mode) {
    case 0:
      limits = inputLimits(line);
      mode++;
      console.log("Enter the drone starting position and orientation");
      break;
    case 1:
      initialPosition = startingPosition(limits, line);
      mode++;
      console.log("Enter the commands to be executed by the drone");
      break;
    case 2:
      actualDrone = commands(initialPosition, limits, line);
      drones.push(actualDrone);
      mode--;
      console.log("Enter the drone starting position and orientation");
      break;
    default:
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log("\n");
  printDrone(drones);
  process.exit(0);
});
