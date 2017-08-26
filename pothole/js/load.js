var loadState = {
	
	preload: function () {

		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading',
			{ font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.image('wall', 'assets/wall.png');
		game.load.image('lines', 'assets/dotted_lines.png');
		game.load.image('grass', 'assets/grass.png');
		game.load.image('car', 'assets/car.png');
		game.load.image('hole', 'assets/pothole.png');
	},

	create: function() {
		
		game.state.start('menu');
	}
};