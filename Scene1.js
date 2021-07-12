class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/krisprofile.png");
    this.load.image("fried", "assets/krisfried.png");
    this.load.image("red", "assets/red.png");
    this.load.image("yellow", "assets/yellow.png");
    this.load.image("green", "assets/green.png");
    this.load.image("blue", "assets/blue.png");
    this.load.audio("beat", ["assets/krisbeat.ogg", "assets/krisbeat.mp3"]);
  }

  create() {
    this.add.text(20, 20, "Identifying vibes...");
    this.scene.start("playGame");
  }
}
