import { TILE_SIZE } from "../consts";

export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader',
            pack: {
                files: [
                    { type: 'image', key: 'bar', url: './assets/images/loadBar.png' },
                ]
            }
        });
    }

    public preload(): void {
        this._loadingBar();

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
        this.load.audio('crowd', 'assets/audio/crowd.mp3');
    }

    public create(): void {
        this.scene.start('main');
    }

    private _loadingBar(): void {
        const bar = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'bar');
        const mask = this.make.graphics({
            x: bar.x - (bar.width / 2),
            y: bar.y - (bar.height / 2),
            add: false
        });
        mask.fillRect(0, 0, 0, bar.height);

        bar.mask = new Phaser.Display.Masks.GeometryMask(this, mask);

        this.load.on('progress', (progress: number) => {
            mask.clear();
            mask.fillRect(0, 0, bar.width * progress, bar.height);
        });
    }
}