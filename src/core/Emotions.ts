import { EMOTION_FRAMES, TILE_SIZE } from '../consts';
import { IFrame } from '../models';

// Becuase there is no other way to hide sprite animation without destroung it
export const OUT_OF_SREEN = 1000;

export class Emotions {
    private _instance: Phaser.Physics.Impact.ImpactSprite;

    constructor(
        anims: Phaser.Animations.AnimationManager,
        impact: Phaser.Physics.Impact.ImpactPhysics
    ) {
        this._instance = impact.add.sprite(
            -OUT_OF_SREEN,
            -OUT_OF_SREEN,
            'emotions',
            0
        );
        this._createAnimations(anims);
        this._instance.addListener('animationcomplete', () =>
            this._instance.setOffset(OUT_OF_SREEN, OUT_OF_SREEN)
        );
    }

    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    public display(x: number, y: number, emotion: string) {
        this._instance.setOffset(
            -x - OUT_OF_SREEN,
            -y + TILE_SIZE - OUT_OF_SREEN
        );
        this._instance.anims.play(emotion, false);
    }

    private _createAnimations(
        animations: Phaser.Animations.AnimationManager
    ): void {
        EMOTION_FRAMES.forEach((data: IFrame) => {
            animations.create({
                key: `emotions_${data.key}`,
                frames: animations.generateFrameNumbers('emotions', {
                    start: data.animationStart,
                    end: data.animationEnd
                }),
                frameRate: 10,
                repeat: 0
            });
        });
    }
}
