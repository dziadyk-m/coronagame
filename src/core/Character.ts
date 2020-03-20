import { HUMAN_FRAMES } from '../consts/human-consts';
import { IHumanFrames } from '../models';

export class Character {
    private _instance: Phaser.Physics.Impact.ImpactSprite;
    protected _spriteName: string;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        anims: Phaser.Animations.AnimationManager,
        spriteName: string,
        startX: number,
        startY: number,
        frames?: IHumanFrames
    ) {
        this._instance = impact.add.sprite(startX, startY, spriteName, 1);
        this._createAnimations(anims, spriteName, frames);
        this._instance.setFixedCollision();
        this._spriteName = spriteName;
    }

    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    public move(): void {
        this._instance.anims.play(`${this._spriteName}_idle`, true);
    }

    public action(): void {
        console.log('action');
    }

    private _createAnimations(
        animations: Phaser.Animations.AnimationManager,
        sprite: string,
        frames: IHumanFrames = HUMAN_FRAMES
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
