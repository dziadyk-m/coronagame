export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_32.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
        this.load.spritesheet('player', 'assets/sprites/spaceman_32.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.scene.start('main');
    }
}