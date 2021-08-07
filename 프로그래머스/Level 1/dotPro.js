const solution = (a, b) => a.reduce((acc, c, i) => (acc += c * b[i]), 0);
