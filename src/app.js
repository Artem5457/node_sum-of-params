'use strict';

function manipulateParams() {
  const mappedParams = process.argv.slice(3).map(el => +el);
  const filtered = mappedParams.filter(el => !isNaN(el));

  // eslint-disable-next-line no-console
  console.log(filtered);

  switch (process.argv[2]) {
    case 'add':
      return filtered.length
        ? filtered.reduce((prev, next) => prev + next, 0)
        : 'There is nothing to add';
    case 'multiply':
      return filtered.length
        ? filtered.reduce((prev, next) => prev * next, 1)
        : 'There is nothing to multiply';
    default:
      return 'Operation is not supported!';
  }
}

// eslint-disable-next-line no-console
console.log(manipulateParams());
