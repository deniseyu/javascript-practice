describe('Javabuzz', function(){

  var javabuzz;

  beforeEach(function(){
  	javabuzz = new Javabuzz();
  });

	describe('is divisible by', function(){

		it('twelve', function(){
			expect(javabuzz.isDivisibleByTwelve(12)).toBe(true);
		});

    	it('six', function(){
      		expect(javabuzz.isDivisibleBySix(6)).toBe(true);
    	});

    	it('four', function(){
    		expect(javabuzz.isDivisibleByFour(4)).toBe(true);
    	});

	});
});