function Javabuzz(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
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