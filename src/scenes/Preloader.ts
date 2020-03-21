import { TILE_SIZE } from "../consts";
import {DialogService} from "../services/dialog.service";

export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/cute_tiles_32.png');
        this.load.image('beach_tiles', 'assets/tilemaps/tiles/beach_tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/json/smalltest.json');

        this.load.spritesheet('emotions', 'assets/sprites/emotions.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });

        this.load.spritesheet('player', 'assets/sprites/spaceman_32.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
        this.load.spritesheet('skeleton', 'assets/sprites/npc_skeleton.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
        this.load.spritesheet('monster', 'assets/sprites/npc_monster.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });

        this.load.scenePlugin({
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            key: 'rexuiplugin',
            sceneKey: 'rexUI'
        });



    }

    create() {
        this.scene.start('main');
    }
}