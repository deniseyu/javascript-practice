describe('Javabuzz', function(){

	describe('is divisible by', function(){

		it('two', function(){
			javabuzz = new Javabuzz;
			expect(javabuzz.isDivisibleBy(2).toBe(true));
		});
	});
});