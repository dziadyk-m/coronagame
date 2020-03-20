import { COLISION_BLOCKS, TILE_SIZE } from "../consts";
import { Player } from "../core";

export class Main extends Phaser.Scene {
    private _assets: any = {};
    private _player: Player;

    constructor() {
        super('main');
    }

    public create(): void {
        this._loadEntities();
        this._loadWorldData();
        this._createPlayer();
    }
    
    public update(): void {
        this._engineLoop();
    }

    private _loadEntities(): void {
        this._assets.map = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        this._assets.tileset = this._assets.map.addTilesetImage('tiles');
        this._assets.layer = this._assets.map.createStaticLayer(0, this._assets.tileset, 0, 0);
    }

    private _loadWorldData(): void {
        this._assets.layer.setCollisionBetween(COLISION_BLOCKS.start, COLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._assets.layer, { defaultCollidingSlope: 1 });
        this.cameras.main.setBounds(0, 0, this._assets.map.widthInPixels, this._assets.map.heightInPixels);
    }

    private _createPlayer(): void {
        this._player = new Player(this.impact, this.anims, this.input);
        this.cameras.main.startFollow(this._player.instance);
    }

    private _engineLoop(): void {
        this._player.move();
    }
}


