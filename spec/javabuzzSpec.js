describe('Javabuzz', function(){

  var javabuzz;

	describe('is divisible by', function(){

		it('two', function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByTwo(2)).toBe(true);
		});

    it('three', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    })

	});
});