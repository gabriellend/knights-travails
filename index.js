const boardSize = 8;
const moves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function isValidPosition([x, y]) {
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

function getKnightMoves([x, y]) {
  return moves.map(([dx, dy]) => [x + dx, y + dy]).filter(isValidPosition);
}

function knightMoves(start, target) {
  const queue = [[start]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current.toString() === target.toString()) {
      return path;
    }

    const nextMoves = getKnightMoves(current);

    for (const next of nextMoves) {
      if (!visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([...path, next]);
      }
    }
  }

  return null;
}

function displayPath(path) {
  if (path.length === 1) {
    console.log(`You don't have to move at all! You can stay at [${path}].`);
  } else {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((step) => console.log(step));
  }
}

const start = [0, 0];
const end = [7, 6];
const path = knightMoves(start, end);

displayPath(path);
