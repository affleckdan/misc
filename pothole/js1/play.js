var playState = {

	create: function() {

		this.createWorld();
		
		this.cursor = game.input.keyboard.createCursorKeys();
		
		/*moveLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		moveRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		
		moveLeft.onDown.add(this.moveCarLeft, this);
		moveRight.onDown.add(this.moveCarRight, this);*/
		
		//car -----------------
		this.player = game.add.sprite(game.world.centerX, 340, 'car');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		
		//potholes -------------
		this.hole = game.add.sprite(60, -10, 'hole');
		game.physics.arcade.enable(this.hole);
		this.hole.anchor.setTo(0.5, 1);
		
		this.hole2 = game.add.sprite(60, -10, 'hole');
		game.physics.arcade.enable(this.hole2);
		this.hole2.anchor.setTo(0.5, 1);
		
		//score ---------------
		this.scoreLabel = game.add.text(30, 30, 'score: 0', { font: '18px Arial', fill: '#ffffff' });
		game.global.score = -1;
	},

	update: function() {

		game.physics.arcade.collide(this.player, this.walls);
		game.physics.arcade.overlap(this.player, this.hole, this.playerDie, null, this);
		game.physics.arcade.overlap(this.player, this.hole2, this.playerDie, null, this);
		
		if (!this.hole.inWorld) {
			this.upScore(), this.updateHolePosition(), this.updateHole2Position();
		}
		
		this.movePlayer();
		
		/*if (this.player.x > game.world.centerX && this.cursor.right.isUp) {
			this.player.body.velocity.x = -700;
		}
		
		if (this.player.x < game.world.centerX && this.cursor.left.isUp) {
			this.player.body.velocity.x = 700;
		}
		
		if (this.player.x >180 && this.player.x < 220 && this.player.body.velocity.x != 0) {
			this.player.body.velocity.x = 0, this.player.x = game.world.centerX;
		}
		
		this.movePlayer();
		
		// car animation
		if (this.player.x > 281 && this.player.x > 270) {
				this.player.body.velocity.x = 0,
				this.player.x = 281;
			}
			
		else if (this.player.x < 119 && this.player.x < 130) {
				this.player.body.velocity.x = 0,
				this.player.x = 119;
			}
		
		else if (this.player.x > 130 && this.player.x < 275 && this.player.body.velocity.x === 0) {
			this.player.x = game.world.centerX;
		}
		
	},

	moveCarLeft: function(LEFT) {
		
		if (this.player.x === game.world.centerX) {
			this.player.x = 119;
		}
		
		else if (this.player.x === 281) {
			this.player.x = game.world.centerX;
		}
	},
	
	moveCarRight: function(RIGHT) {
		
		if (this.player.x === game.world.centerX) {
			this.player.x = 281;
		}
		
		else if (this.player.x === 119) {
			this.player.x = game.world.centerX;
		}*/
		
		
		
	},
	
	movePlayer: function() {
		
		if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -800;
		}
		
		else if (this.cursor.right.isDown) {
			this.player.body.velocity.x = 800;
		}
		
		else {
			this.player.body.velocity.x = 0;
		}
		
	},

	upScore: function(player, hole) {
		
		game.global.score += 1;
		this.scoreLabel.text = 'score: ' + game.global.score;
	},

	updateHolePosition: function() {
		
		var holePosition = [
			{x: game.world.centerX, y: 0}, {x: 120, y: 0}, {x: 280, y: 0}
		];
		for (var i = 0; i < holePosition.length; i++) {
			if (holePosition[i].x === this.hole.x) {
				holePosition.splice(i, 1);
			}
		}
		var newPosition = holePosition[game.rnd.integerInRange(0,
		holePosition.length-1)];
		this.hole.reset(newPosition.x, newPosition.y);
		this.hole.body.velocity.y = 500;
	},
	
	updateHole2Position: function() {
		
		var speed = 500;
		var randomValue = game.rnd.integerInRange(0, 7);
		
		if (randomValue === 1) {
			this.hole2.reset(game.world.centerX, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 2) {
			this.hole2.reset(game.world.centerX, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 3) {
			this.hole2.reset(280, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 4) {
			this.hole2.reset(280, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 5) {
			this.hole2.reset(280, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 6) {
			this.hole2.reset(280, 0);
			this.hole2.body.velocity.y = speed;
		}
	},
	
	createWorld: function() {
		
		this.dirt = game.add.group();
		game.add.image(0, 0, 'dirt', 0, this.dirt);
		game.add.image(340, 0, 'dirt', 0, this.dirt);
		
		this.walls = game.add.group();
		this.walls.enableBody = true;
		game.add.sprite(60, 0, 'wall', 0, this.walls);
		game.add.sprite(320, 0, 'wall', 0, this.walls);
		this.walls.setAll('body.immovable', true);
		
		this.line1 = game.add.sprite(240, 0, 'line');
			this.line1.anchor.setTo(0.5, 0);
		this.line2 = game.add.image(160, 0, 'line');
			this.line2.anchor.setTo(0.5, 0);
	},

	playerDie: function() {
		
		game.state.start('menu');
	},
};