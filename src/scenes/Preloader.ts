import { TILE_SIZE } from "../consts";

export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/cute_tiles_32.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/json/smalltest.json');

        this.load.spritesheet('emotions', 'assets/sprites/emotions.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });

        this.load.spritesheet('test', 'assets/sprites/test.png', { frameWidth: 2 * TILE_SIZE, frameHeight: 2 * TILE_SIZE });
        this.load.spritesheet('player', 'assets/sprites/test.png', { frameWidth: 2 * TILE_SIZE, frameHeight: 2 * TILE_SIZE });

        this.load.scenePlugin({
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            key: 'rexuiplugin',
            sceneKey: 'rexUI'
        });

        this.load.audio('background_music', 'assets/audio/background_music.mp3');
    }

    create() {
        this.scene.start('main');
    }
}