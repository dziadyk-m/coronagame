import { COLISION_BLOCKS, TILE_SIZE, NPC_DATA } from "../consts";
import { tryToProvideAction } from "../utils";
import { Player, Character } from "../core";

export class Main extends Phaser.Scene {
    private _basicLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _collisionLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _gameMap: Phaser.Tilemaps.Tilemap;
    private _npcs: Character[] = [];
    private _player: Player;

    constructor() {
        super('main');
    }

    public create(): void {
        this._loadEntities();
        this._loadWorldData();
        this._createNpcs();
        this._createPlayer();
        this._actionHookes();
    }
    
    public update(): void {
        this._player.move();
        this._moveNpcs();
    }

    private _loadEntities(): void {
        this._gameMap = this.make.tilemap({ key: 'map' });
        const gameTiles = this._gameMap.addTilesetImage('tilemap2x', 'tiles');
        this._basicLayer = this._gameMap.createStaticLayer(0, gameTiles, 0, 0);
        this._collisionLayer = this._gameMap.createStaticLayer("collision", gameTiles, 0, 0);
    }

    private _loadWorldData(): void {
        this._basicLayer.setCollisionBetween(COLISION_BLOCKS.start, COLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._basicLayer, { defaultCollidingSlope: 1 });
        this.impact.world.setCollisionMapFromTilemapLayer(this._collisionLayer, { defaultCollidingSlope: 1 });
        this.cameras.main.setBounds(0, 0, this._gameMap.widthInPixels, this._gameMap.heightInPixels);
    }

    private _createPlayer(): void {
        this._player = new Player(this.impact, this.anims, this.input);
        this.cameras.main.startFollow(this._player.instance);
    }
    
    private _createNpcs(): void {
        NPC_DATA.forEach(npc => {
            const character = new Character(this.impact, this.anims, npc.sprite, npc.startX, npc.startY)
            this._npcs.push(character);
        });
    }

    private _moveNpcs(): void {
        this._npcs.forEach(npc => npc.move());
    }

    private _actionHookes() {
        this.input.keyboard.on('keydown', (key: Phaser.Input.Keyboard.Key) => {
            switch(key.keyCode) {
                case 32: /* Space */
                    tryToProvideAction(this._player, this._npcs);
                    break;
            }
        });
    }
}


