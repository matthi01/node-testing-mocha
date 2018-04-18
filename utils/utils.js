module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

//async
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (num, callback) => {
  setTimeout(() => {
    callback(num * num);
  }, 1000);
};
