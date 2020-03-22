import { EMOTION_FRAMES, TILE_SIZE } from '../consts';
import { Character } from './Character';
import { IFrame } from '../models';

// Becuase there is no other way to hide sprite animation without destroung it
export const OUT_OF_SREEN = 1000;

export class Emotions {
    private _impact: Phaser.Physics.Impact.ImpactPhysics;
    private _anims: Phaser.Animations.AnimationManager;

    private static _classInstance: Emotions;

    private constructor(
        anims: Phaser.Animations.AnimationManager,
        impact: Phaser.Physics.Impact.ImpactPhysics
    ) {
        this._impact = impact;
        this._anims = anims;
    }

    public display(x: number, y: number, emotion: string, character: Character) {
        if (!this._anims.get(`emotions_${emotion}`)) {
            this._createAnimation(emotion);
        }

        const instance = this._impact.add.sprite(x, y - 2 * TILE_SIZE, 'emotions');
        character.hasStoped = true;
        instance.addListener('animationcomplete', () => {
            character.hasStoped = false;
            instance.destroy();
        });
        instance.anims.play(`emotions_${emotion}`, false);
    }

    public displayAndKeep(x: number, y: number, emotion: string, character: Character) {
        if (!this._anims.get(`emotions_${emotion}`)) {
            this._createAnimation(emotion);
        }

        const instance = this._impact.add.sprite(x, y - 2 * TILE_SIZE, 'emotions');
        character.hasStoped = true;
        instance.addListener('animationcomplete', () => {
            character.hasStoped = false;
        });
        instance.anims.play(`emotions_${emotion}`, false);
        return instance;
    }


    private _createAnimation(key: string): void {
        const frame = EMOTION_FRAMES.find((frame: IFrame) => frame.key === key)
        this._anims.create({
            key: `emotions_${key}`,
            frames: this._anims.generateFrameNumbers('emotions', {
                start: frame.animationStart,
                end: frame.animationEnd
            }),
            frameRate: 10,
            repeat: 0
        });
    }

    public static getInstance(
        anims: Phaser.Animations.AnimationManager,
        impact: Phaser.Physics.Impact.ImpactPhysics
    ): Emotions {
        if (!Emotions._classInstance) {
            Emotions._classInstance = new Emotions(anims, impact);
        }
        return Emotions._classInstance;
    }
}
