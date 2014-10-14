function Javabuzz(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleBySeventeen = function(number) {
  return this._isDivisibleBy(number, 17);
};

Javabuzz.prototype.isDivisibleByTwelve = function(number) {
  return this._isDivisibleBy(number, 12);
};

Javabuzz.prototype.isDivisibleBySix = function(number) {
	return this._isDivisibleBy(number, 6);
};

Javabuzz.prototype.isDivisibleByFour = function(number) {
  return this._isDivisibleBy(number, 4);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
	return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByTwo = function(number) {
  return this._isDivisibleBy(number, 2);
};

