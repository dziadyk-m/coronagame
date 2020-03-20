export class Human {
    private _instance: Phaser.Physics.Impact.ImpactSprite;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        anims: Phaser.Animations.AnimationManager,
        spriteName: string,
        startX: number,
        startY: number
    ) {
        this._instance = impact.add.sprite(startX, startY, spriteName, 1);
        this._createAnimations(anims, spriteName);
    }

    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    private _createAnimations(
        animations: Phaser.Animations.AnimationManager,
        sprite: string
    ): void {
        animations.create({
            key: 'left',
            frames: animations.generateFrameNumbers(sprite, { start: 8, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        animations.create({
            key: 'right',
            frames: animations.generateFrameNumbers(sprite, { start: 1, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        animations.create({
            key: 'up',
            frames: animations.generateFrameNumbers(sprite, { start: 11, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        animations.create({
            key: 'down',
            frames: animations.generateFrameNumbers(sprite, { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
    }
}
