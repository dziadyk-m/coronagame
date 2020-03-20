import { COLISION_BLOCKS, TILE_SIZE } from "../consts";
import { Player } from "../core";

export class Main extends Phaser.Scene {
    private _basicLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _gameMap: Phaser.Tilemaps.Tilemap;
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
        this._gameMap = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        const gameTiles = this._gameMap.addTilesetImage('tiles');
        this._basicLayer = this._gameMap.createStaticLayer(0, gameTiles, 0, 0);
    }

    private _loadWorldData(): void {
        this._basicLayer.setCollisionBetween(COLISION_BLOCKS.start, COLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._basicLayer, { defaultCollidingSlope: 1 });
        this.cameras.main.setBounds(0, 0, this._gameMap.widthInPixels, this._gameMap.heightInPixels);
    }

    private _createPlayer(): void {
        this._player = new Player(this.impact, this.anims, this.input);
        this.cameras.main.startFollow(this._player.instance);
    }

    private _engineLoop(): void {
        this._player.move();
    }
}


