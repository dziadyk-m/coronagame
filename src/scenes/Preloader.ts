import { TILE_SIZE } from "../consts";

export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/cute_tiles_32.png');
        this.load.image('beach_tiles', 'assets/tilemaps/tiles/beach_tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/json/smalltest.json');

        this.load.spritesheet('emotions', 'assets/sprites/emotions.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });

        this.load.spritesheet('player', 'assets/sprites/player.png', { frameWidth: 2 * TILE_SIZE, frameHeight: 2 * TILE_SIZE });
        this.load.spritesheet('fox', 'assets/sprites/fox.png', { frameWidth: 2 * TILE_SIZE, frameHeight: 2 * TILE_SIZE });

        for (let i = 1; i < 15; i++) {
            this.load.spritesheet(`npc_${i}`, `assets/sprites/npc_${i}.png`, { frameWidth: 2 * TILE_SIZE, frameHeight: 2 * TILE_SIZE });
        }

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