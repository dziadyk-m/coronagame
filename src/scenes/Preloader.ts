export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
        this.load.spritesheet('player', 'assets/sprites/spaceman.png', { frameWidth: 16, frameHeight: 16 });
    }

    create() {
        this.scene.start('main');
    }
}