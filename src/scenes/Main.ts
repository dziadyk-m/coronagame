import { COLLISION_BLOCKS, TILE_SIZE, LVL1_INITIAL_DIALOG_TEXT, LVL1_INITIAL_DIALOG_TITLE, LVL2_INITIAL_DIALOG_TITLE, LVL2_INITIAL_DIALOG_TEXT } from '../consts';
import { tryToProvideAction, checkForActions, generateCrowdSound } from '../utils';
import { DataService, DialogService, SoundService } from '../services';
import { Player, Character, GameObject } from '../core';
import { NPC_DATA, GAME_OBJECTS_DATA } from '../data';

export class Main extends Phaser.Scene {
    private _collisionLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _gameMap: Phaser.Tilemaps.Tilemap;

    private _dataService = DataService.getInstance();
    private _level = 1;

    constructor() {
        super('main');
        const levelParam = new URL(window.location.href).searchParams.get('level');
        this._level = levelParam ? parseInt(levelParam, 10) : 1;
    }

    public create(): void {
        this._loadEntitiesAndWorldData();
        this._actionHookes();
        this._setBackgroundMusic();

        switch (this._level) {
            case 1:
                DialogService.getInstance().openModal(LVL1_INITIAL_DIALOG_TITLE, LVL1_INITIAL_DIALOG_TEXT);
                break;
            case 2:
                DialogService.getInstance().openModal(LVL2_INITIAL_DIALOG_TITLE, LVL2_INITIAL_DIALOG_TEXT);
                DataService.getInstance().shouldDisplayInfection = true;
                break;
        }
    }

    public update(): void {
        this._dataService.player.move();
        this._tryToProvideActions()
        this._moveNpcs();
        this._dataService.npcs.forEach(npc => npc.update());
        this._dataService.player.update();
    }

    private _loadEntitiesAndWorldData(): void {
        this._gameMap = this.make.tilemap({ key: 'map' });
        const beachTiles = this._gameMap.addTilesetImage('beach_tileset', 'beach_tiles');
        const gameTiles = this._gameMap.addTilesetImage('tilemap2x', 'tiles');
        const beachMaps = ['underfloating', 'background_sea', 'shadows_sea', 'collision_sea'];
        const cityMaps = ['background', 'shadows', 'collision'];

        this._collisionLayer = this._gameMap.createStaticLayer('main_collisions', gameTiles, 0, TILE_SIZE);

        beachMaps.forEach(element => {
            this._gameMap.createStaticLayer(element, beachTiles, 0, TILE_SIZE);
        });
        cityMaps.forEach(element => {
            this._gameMap.createStaticLayer(element, gameTiles, 0, TILE_SIZE);
        });

        this._createNpcsAndObjects();
        this._createPlayer();

        this._gameMap.createStaticLayer('floating', gameTiles, 0, TILE_SIZE);
        this._gameMap.createStaticLayer('overfloating', gameTiles, 0, TILE_SIZE);
    
        this._collisionLayer.setCollisionBetween(COLLISION_BLOCKS.start, COLLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._collisionLayer);

        this.cameras.main.setBounds(0, TILE_SIZE, this._gameMap.widthInPixels, this._gameMap.heightInPixels);
    }

    private _setBackgroundMusic(): void {
        const soundService = SoundService.init(this.game);
        soundService.setBackgroundMusic('background_music');
        soundService.playBackgroundMusic();
        generateCrowdSound();
    }

    private _createNpcsAndObjects(): void {
        NPC_DATA.forEach((npcData) => {
            this._dataService.npcs.push(new Character(this.impact, this.anims, npcData));
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
                case 32: // Space
                    tryToProvideAction(this._dataService.player, this._dataService.npcs, this._dataService.objects);
                    break;
                case 27: // Esc
                    DialogService.getInstance().closeAllModals();
                    break;
                case 49: // 1
                    window.location.href = `//${location.host}${location.pathname}`
                    break;
                case 50: // 2
                    window.location.href = `//${location.host}${location.pathname}?level=2`
                    break;
            }
21        });
    }
    
    private _tryToProvideActions(): void {
        checkForActions();
    }
}
