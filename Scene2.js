class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }


  create() {
    var background = this.add.image(0, 0, "background").setInteractive();
    background.setOrigin(0, 0);
    background.setDepth(2);
    
    this.clickMe = this.add.text(20, 20, 'Click to move differently', { fill: 'white' })
    clickMe.setDepth(3);
    
    var particles = this.add.particles('red');
    var particles2 = this.add.particles('yellow');
    var particles3 = this.add.particles('green');
    var particles4 = this.add.particles('blue');

        var emitter = particles.createEmitter({
            speed: 200,
            scale: { start: 2, end: 0 },
            blendMode: 'ADD'
        });

        var emitter2 = particles2.createEmitter({
            speed: 200,
            scale: { start: 2, end: 0 },
            blendMode: 'ADD'
        });

        var emitter3 = particles3.createEmitter({
            speed: 200,
            scale: { start: 2, end: 0 },
            blendMode: 'ADD'
        });

        var emitter4 = particles4.createEmitter({
            speed: 200,
            scale: { start: 2, end: 0 },
            blendMode: 'ADD'
        });

        var beat = this.sound.add("beat");

        var beatConfig = {
          mute: false,
          volume: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0
        }

    background.on('pointerdown', function (pointer) {
        this.setTexture("fried");
        emitter.startFollow(pointer);
        particles.setDepth(3);
        emitter2.startFollow(pointer);
        particles2.setDepth(3);
        emitter3.startFollow(pointer);
        particles3.setDepth(3);
        emitter4.startFollow(pointer);
        particles4.setDepth(3);
        beat.play(beatConfig);
            });

    background.on('pointerup', function (pointer) {
        this.setTexture("background");
        emitter.stopFollow(pointer);
        particles.setDepth(1);
        emitter2.stopFollow(pointer);
        particles2.setDepth(1);
        emitter3.stopFollow(pointer);
        particles3.setDepth(1);
        emitter4.stopFollow(pointer);
        particles4.setDepth(1);
        beat.stop();
                    });

  }

  update(){

  }

}
