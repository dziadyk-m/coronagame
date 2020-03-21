import { Player, Character, GameObject, Emotions } from '../core';
import {DataService, DialogService, SoundService} from '../services';
import { NPC_DATA, GAME_OBJECTS_DATA } from '../data';
import { tryToProvideAction } from '../utils';
import { COLISION_BLOCKS } from '../consts';

export class Main extends Phaser.Scene {
    private _collisionLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _gameMap: Phaser.Tilemaps.Tilemap;

    private _dataService = DataService.getInstance();

    constructor() {
        super('main');
    }

    public create(): void {
        this._loadEntitiesAndWorldData();
        this._actionHookes();
    }

    public update(): void {
        this._dataService.player.move();
        this._moveNpcs();
    }

    private _loadEntitiesAndWorldData(): void {
        this._gameMap = this.make.tilemap({ key: 'map' });
        const gameTiles = this._gameMap.addTilesetImage('tilemap2x', 'tiles');
        const beachTiles = this._gameMap.addTilesetImage('beach_tileset', 'beach_tiles');

        this._collisionLayer = this._gameMap.createStaticLayer('main_collisions', gameTiles, 0, 0); // TODO: Refactor since we probably do not need this as a class variable
        this._gameMap.createStaticLayer('underfloating', beachTiles, 0, 0);  
        this._gameMap.createStaticLayer('background_sea', beachTiles, 0, 0);      
        this._gameMap.createStaticLayer('background', gameTiles, 0, 0);
        this._gameMap.createStaticLayer('shadows_sea', beachTiles, 0, 0);  
        this._gameMap.createStaticLayer('shadows', gameTiles, 0, 0);
        
        this._gameMap.createStaticLayer('collision', gameTiles, 0, 0);
        this._gameMap.createStaticLayer('collision_sea', beachTiles, 0, 0);
        this._gameMap.createStaticLayer('floating', gameTiles, 0, 0);
        this._gameMap.createStaticLayer('overfloating', gameTiles, 0, 0);

        this._createNpcsAndObjects();
        this._createPlayer();
    
        this._collisionLayer.setCollisionBetween(COLISION_BLOCKS.start, COLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._collisionLayer);

        this.impact.world.setCollisionMapFromTilemapLayer

        this.cameras.main.setBounds(0, 0, this._gameMap.widthInPixels, this._gameMap.heightInPixels);
        this._setBackgroundMusic();
    }

    private _setBackgroundMusic(): void {
        SoundService.init(this.game);
        SoundService.getInstance().setBackgroundMusic('background_music');
        SoundService.getInstance().playBackgroundMusic();
    }

    private _createNpcsAndObjects(): void {
        NPC_DATA.forEach(npcData => { this._dataService.npcs.push(
            new Character(this.impact, this.anims, npcData));
        });
        GAME_OBJECTS_DATA.forEach(objectData => {
            this._dataService.objects.push(new GameObject(objectData));
        });
    }

    private _createPlayer(): void {
        this._dataService.player = new Player(this.impact, this.anims, this.input,);
        this.cameras.main.startFollow(this._dataService.player.instance);
    }

    private _moveNpcs(): void {
        this._dataService.npcs.forEach(npc => npc.move());
    }

    private _actionHookes() {
        DialogService.init(this.scene);
        this.input.keyboard.on('keydown', (key: Phaser.Input.Keyboard.Key) => {
            switch (key.keyCode) {
                case 32 /* Space */:
                    tryToProvideAction(this._dataService.player, this._dataService.npcs, this._dataService.objects);
                    break;
                case 81 /* Q */:
                    DialogService.getInstance().openModal(
                        'Test modal', 
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
                    );
                    break;
                case 87 /* W */:
                case 27 /* Esc */:
                    DialogService.getInstance().closeModal();
                    break;
            }
        });
    }
}
