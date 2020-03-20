import { TILE_SIZE } from "../consts";

export class Preloader extends Phaser.Scene {
    constructor() {
        super({});
    }

    preload() {
        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_32.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
        this.load.spritesheet('player', 'assets/sprites/spaceman_32.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
        this.load.spritesheet('skeleton', 'assets/sprites/npc_skeleton.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
        this.load.spritesheet('monster', 'assets/sprites/npc_monster.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
    }

    create() {
        this.scene.start('main');
    }
}