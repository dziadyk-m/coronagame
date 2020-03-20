import { ICharacterFrames, INpcData } from '../models';
import { CHARACTER_DEFAULT_FRAMES } from '../consts';

export class Character {
    public action: Function = () => {};
    protected _spriteName: string;
    private _instance: Phaser.Physics.Impact.ImpactSprite;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        anims: Phaser.Animations.AnimationManager,
        data: INpcData,
        frames?: ICharacterFrames
    ) {
        this._instance = impact.add.sprite(data.startX, data.startY, data.sprite, 1);
        this._createAnimations(anims, data.sprite, frames);
        this._instance.setFixedCollision();
        this._spriteName = data.sprite;
        this.action = data.action;
    }

    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    public move(): void {
        this._instance.anims.play(`${this._spriteName}_idle`, true);
    }

    private _createAnimations(
        animations: Phaser.Animations.AnimationManager,
        sprite: string,
        frames: ICharacterFrames = CHARACTER_DEFAULT_FRAMES
    ): void {
        Object.keys(frames).forEach((key: string) => {
            animations.create({
                key: `${sprite}_${key}`,
                frames: animations.generateFrameNumbers(sprite, {
                    start: (frames as any)[key].start,
                    end: (frames as any)[key].end
                }),
                frameRate: 10,
                repeat: -1
            });
        });
    }
}
