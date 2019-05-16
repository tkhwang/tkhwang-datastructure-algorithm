/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this._storage = [];
  this._size = size;
  this._count = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  let avg = 0;
  let sum = 0;

  if (this._count < this._size) {
    this._storage.push(val);
    this._count += 1;
  } else if (this._count === this._size) {
    this._storage.shift();
    this._storage.push(val);
  }

  for (let value of this._storage) {
    sum += value;
  }

  return sum / this._count;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
