# Instructions

To run the program

```bash
yarn start
```

You will be prompt to do some inputs, the order is

1. Map limits
2. Drone starting position and orientation
3. Commands to drone

2 and 3 will be repeating to add more drones until you exit de program with `CTRL+C`.

Once you exit, the program will show you the last position registered of each drone.

Example input:
```js
5 5 // map limit
3 3 E // first drone starting position and orientation
L // commands to drone
3 3 E // second drone starting position and orientation
MMRMMRMRRM // commands to drone
1 2 N // third drone starting position and orientation
LMLMLMLMMLMLMLMLMM // commands to drone
```

Example output:
```js
A drone has returned home, last position registered was [3,3]{N}
A drone has returned home, last position registered was [5,1]{E}
A drone has returned home, last position registered was [1,4]{N}
```

To run tests
```bash
yarn test
```

To run tests on watch mode
```bash
yarn test:watch
```
