describe('Rps', function(){

var rps;

	describe('rps should contain three options', function(){
		it('should choose rock', function(){
			rps = new Rps();
			expect(rps.play(rock)).toEqual("rock");
		});
	});
});