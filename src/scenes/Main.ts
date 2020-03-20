export class Main extends Phaser.Scene {
    private _assets: any = {};
    private _player: any;

    constructor() {
        super('main');
    }

    public create(): void {
        this._loadEntities();
        this._loadMapData();
    }
    
    public update(): void {
        this._engineLoop();
    }

    private _loadEntities(): void {
        this._assets.map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        this._assets.tileset = this._assets.map.addTilesetImage('tiles');
        this._assets.layer = this._assets.map.createStaticLayer(0, this._assets.tileset, 0, 0);
    }

    private _loadMapData(): void {
        this._assets.layer.setCollisionBetween(54, 83);

        // If we don't have slopes in our map, we can simply specify what the default colliding tile's
        // slope ID should be. In this case, it would just be the ID for a solid rectangle, 1.
        this.impact.world.setCollisionMapFromTilemapLayer(this._assets.layer, { defaultCollidingSlope: 1 });
    
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 11, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
    
        this._player = new Player(this.impact.add.sprite(50, 100, 'player', 1),  this.input.keyboard.createCursorKeys());
    
        this.cameras.main.setBounds(0, 0, this._assets.map.widthInPixels, this._assets.map.heightInPixels);
        this.cameras.main.startFollow(this._player.instance);
    
    }

    private _engineLoop(): void {
        this._player.move();
    }
}

class Human {
    private _instance: any;

    constructor(instance: any) {
        this._instance = instance;
    }

    get instance() {
        return this._instance;
    }
}

class Player extends Human {
    private _cursors: any;

    constructor(instance: any, coursors: any) {
        super(instance);
        this._cursors = coursors;
        this.instance.setMaxVelocity(300, 400);
    }

    public move(): void {
        this.instance.setVelocity(0);

        if (this._cursors.left.isDown) {
            this.instance.setVelocityX(-100);
        } else if (this._cursors.right.isDown) {
            this.instance.setVelocityX(100);
        }

        if (this._cursors.up.isDown) {
            this.instance.setVelocityY(-100);
        } else if (this._cursors.down.isDown) {
            this.instance.setVelocityY(100);
        }

        // Update the animation last and give left/right animations precedence over up/down animations
        if (this._cursors.left.isDown) {
            this.instance.anims.play('left', true);
        } else if (this._cursors.right.isDown) {
            this.instance.anims.play('right', true);
        } else if (this._cursors.up.isDown) {
            this.instance.anims.play('up', true);
        } else if (this._cursors.down.isDown) {
            this.instance.anims.play('down', true);
        } else {
            this.instance.anims.stop();
        }
    }
}