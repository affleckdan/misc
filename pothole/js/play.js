var playState = {

	create: function() {

		this.createWorld();
		
		//this.cursor = game.input.keyboard.createCursorKeys();
		
		moveLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		moveRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		
		moveLeft.onDown.add(this.moveCarLeft, this);
		moveRight.onDown.add(this.moveCarRight, this);
		
		// car -----------------
		this.player = game.add.sprite(game.world.centerX, 340, 'car');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		
		// potholes -------------
		this.hole = game.add.sprite(60, -10, 'hole');
		game.physics.arcade.enable(this.hole);
		this.hole.anchor.setTo(0.5, 1);
		
		this.hole2 = game.add.sprite(60, -10, 'hole');
		game.physics.arcade.enable(this.hole2);
		this.hole2.anchor.setTo(0.5, 1);
		
		// score ---------------
		this.scoreLabel = game.add.text(25, 40, '0', { font: 'bold 26px Arial', fill: 'blue' });
		this.scoreLabel.anchor.setTo(0.5, 0.5);
		game.global.score = -1;
	},

	update: function() {
		
		this.animateWorld();

		//game.physics.arcade.overlap(this.player, this.hole, this.playerDie, null, this);
		//game.physics.arcade.overlap(this.player, this.hole2, this.playerDie, null, this);
		
		if (!this.hole.inWorld) {
			this.upScore(), this.updateHolePosition(), this.updateHole2Position();
		}
		
		//moveLeft.onDown.add(this.moveCarLeft, this);
		moveRight.onDown.add(this.moveCarRight, this);
		
	//	this.moveCarLeft();
	//	this.moveCarRight();
		
		//this.movePlayer();
	},

	/*moveCarLeft: function(LEFT) {
	    
	    this.player.x -= 9;
		
		if (this.player.x === game.world.centerX) {
			
			this.player.x -= 9;
		
		    if (this.player.x <= 120) {
		        this.player.x = 120;
		    } 
		}
		
		else if (this.player.x === 283) {
			
			this.player.x -= 9;
		
		    if (this.player.x <= game.world.centerX) {
		        this.player.x = game.world.centerX;
		    }
		}
		
	},*/
	
	moveCarRight: function(RIGHT) {
		
		if (this.player.x === game.world.centerX) {
			
			this.player.body.velocity.x = 5;
		//	this.player.body.acceleration.x = -3;
		    
		    if (this.player.x >= 283) {
		        this.player.x = 283;
		    }
		}
		
		else if (this.player.x === 120) {
			
			this.player.x += 9;
		    
		    if (this.player.x >= 200) {
		        this.player.x = game.world.centerX;
		    }
		}
	},
	
	/*movePlayer: function() {
		
		if (this.cursor.left.isDown) {
			this.player.x -= 9;
		}
		
		else if (this.cursor.right.isDown) {
			this.player.x += 9;
		}
		
		if (this.player.x >= 275) {
		    this.player.x = 283;
		}
		
		if (this.player.x <= 125) {
		    this.player.x = 120;
		}
				
	},*/

	upScore: function(player, hole) {
		
		game.global.score += 1;
		this.scoreLabel.text = ' ' + game.global.score;
	},

	updateHolePosition: function() {
		
		var holePosition = [{x: game.world.centerX, y: 0}, {x: 120, y: 0}, {x: 280, y: 0}];
		
		var newPosition = holePosition [game.rnd.integerInRange(0, holePosition.length-1)];
		
		this.hole.reset(newPosition.x, newPosition.y);
		this.hole.body.velocity.y = 500;
	},
	
	updateHole2Position: function() {
		
		var speed = 500;
		var randomValue = game.rnd.integerInRange(0, 7);
		
		if (randomValue === 1 || randomValue === 2) {
			this.hole2.reset(game.world.centerX, 0);
			this.hole2.body.velocity.y = speed;
		}
		
		else if (randomValue === 3 || randomValue === 4 || randomValue === 5 || randomValue === 6) {
			this.hole2.reset(280, 0);
			this.hole2.body.velocity.y = speed;
		}
	},
	
	createWorld: function() {
		
		grass1 = game.add.tileSprite(0, 0, 60, 400, 'grass');
		grass2 = game.add.tileSprite(340, 0, 60, 400, 'grass');
			
		lines1 = game.add.tileSprite(239.5, 0, 5, 400, 'lines');
		lines2 = game.add.tileSprite(159.5, 0, 5, 400, 'lines');
		
		this.walls = game.add.group();
		game.add.image(60, 0, 'wall', 0, this.walls);
		game.add.image(320, 0, 'wall', 0, this.walls);
	},
	
	animateWorld: function() {
	    
	    grass1.tilePosition.y += 8.3;
		grass2.tilePosition.y += 8.3;
		lines1.tilePosition.y += 8.3;
		lines2.tilePosition.y += 8.3;
	},

	playerDie: function() {
		
		game.state.start('dead');
	},
};