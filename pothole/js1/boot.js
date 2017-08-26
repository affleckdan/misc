var bootState = {

	preload: function () {
		
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function() {

		game.stage.backgroundColor = '#7D7D7D';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	}
};