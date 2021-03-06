var menuState = {

	create: function() {

		this.walls = game.add.group();
		this.walls.enableBody = true;
		game.add.image(60, 0, 'wall', 0, this.walls);
		game.add.image(320, 0, 'wall', 0, this.walls);
		this.walls.setAll('body.immovable', true);
		
		this.grass = game.add.group();
		game.add.image(0, 0, 'grass', 0, this.grass);
		game.add.image(340, 0, 'grass', 0, this.grass);
		
		this.car = game.add.image(game.world.centerX, 340, 'car');
			this.car.anchor.setTo(0.5, 0.5);
		
		this.line1 = game.add.image(240, 0, 'lines');
			this.line1.anchor.setTo(0.5, 0);
		this.line2 = game.add.image(160, 0, 'lines');
			this.line2.anchor.setTo(0.5, 0);

		var nameLabel = game.add.text(game.world.centerX, 79, 'Pothole',
			{ font: '50px Arial', fill: '#000000' });
		nameLabel.anchor.setTo(0.5, 0.5);

		var scoreLabel = game.add.text(game.world.centerX, 162,
			'score: ' + game.global.score,
			{ font: '25px Arial', fill: '#000000' });
		scoreLabel.anchor.setTo(0.5, 0.5);

		var startLabel = game.add.text(game.world.centerX, 240,
			'press \'UP\' to start',
			{ font: '25px Arial', fill: '#000000' });
		startLabel.anchor.setTo(0.5, 0.5);

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
	},

	start: function() {

		game.state.start('play');
	},
};