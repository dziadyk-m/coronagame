import { CHARACTER_DEFAULT_FRAMES, TILE_SIZE, CHARACTER_OFFSET } from '../consts';
import { ICharacterFrames, ICharacterData, ICharacterMoves } from '../models';
import { Emotions } from './Emotions';
import { Animations } from '../enum';
import { HUMAN_FRAMES, NPC_SLOW_SPEED, NPC_MODERATE_SPEED, NPC_SPRINT_SPEED, NPC_STOPPED } from '../consts/human-consts';



class NpcSpeed {
    protected _currentPeace: number;
    protected _staminaLevel: number;
    protected _inRush: boolean;

    constructor(){
        this._currentPeace = NPC_MODERATE_SPEED;
        this._staminaLevel = 100;
        this._inRush = false;
    }

    public getSpeed(): number {
        if (this._staminaLevel > 90) {
            this._currentPeace = [NPC_SPRINT_SPEED, NPC_MODERATE_SPEED][Math.floor(Math.random() * 2)]
        } else if (this._staminaLevel > 40) {
            this._currentPeace = [NPC_MODERATE_SPEED, NPC_SLOW_SPEED][Math.floor(Math.random() * 2)]
        } else {
            this._currentPeace = [NPC_SLOW_SPEED, NPC_STOPPED][Math.floor(Math.random() * 2)]
        }
        
        switch (this._currentPeace) {
            case NPC_STOPPED: {
                this._staminaLevel += 5;
                break;
            }
            case NPC_SLOW_SPEED: {
                this._staminaLevel += 2;
                break;
            }
            case NPC_SPRINT_SPEED: {
                this._staminaLevel -= 20;
                break;
            }
        }

        if (this._staminaLevel > 100) {
            this._staminaLevel = 100
        }
        return this._currentPeace
    }
}

export class Character {
    public action: Function = () => {};
    protected _spriteName: string;
    
    private _instance: Phaser.Physics.Impact.ImpactSprite;
    private _emotions: Emotions;
    protected _isMovingToGoal: boolean;
    protected _npcSpeed: number;
    protected _directions: ICharacterMoves;
    private __speed: NpcSpeed;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        anims: Phaser.Animations.AnimationManager,
        data: ICharacterData,
        directions?: ICharacterMoves,
        frames?: ICharacterFrames
    ) {
        if (directions != null) {
            const startPoint = directions.getPoint()
            data.startX = startPoint[0]
            data.startY = startPoint[1]
        }
        this._instance = impact.add.sprite(data.startX * TILE_SIZE, data.startY * TILE_SIZE, data.sprite, 1);
        this._emotions = Emotions.getInstance(anims, impact);
        this._spriteName = data.sprite;
        this.action = data.action;
        this._createAnimations(anims, data.sprite, frames);
        this._menagePhisics();
        this._isMovingToGoal = false;
        this.__speed = new NpcSpeed();
        this._directions = directions;
    }

    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    get spriteName(): string {
        return this._spriteName;
    }

    public displayEmotion(id: string): void {
        this._emotions.display(this.instance.x, this.instance.y, id);
    }
    private _moveUp(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_up`, true);
        this.instance.setVelocityY(-speed);
        this.instance.setVelocityX(0);
    }

    private _moveDown(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_down`, true);
        this.instance.setVelocityY(+speed);
        this.instance.setVelocityX(0);
    }

    private _moveLeft(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_left`, true);
        this.instance.setVelocityX(-speed);
        this.instance.setVelocityY(0);
    }

    private _moveRight(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_right`, true);
        this.instance.setVelocityX(speed);
        this.instance.setVelocityY(0);
    }

    private _stop(): void {
        this._instance.anims.play(`${this._spriteName}_idle`, true);
        this.instance.setVelocityX(0);
        this.instance.setVelocityY(0);
    }

    public move(): void {
        const direction = this._directions.getStep(this._instance.x, this._instance.y)
        const getCurrentSpeed = this.__speed.getSpeed()
        switch (direction) {
            case "up": {
                this._moveUp(getCurrentSpeed);
                break;
            }
            case "down": {
                this._moveDown(getCurrentSpeed);
                break;
            }
            case "left": {
                this._moveLeft(getCurrentSpeed);
                break;
            }
            case "right": {
                this._moveRight(getCurrentSpeed);
                break;
            }
            case "stop": {
                this._stop();
                break;
            }
        }
    }

    private _menagePhisics(): void {
        this.instance.setOffset(
            CHARACTER_OFFSET.x,
            CHARACTER_OFFSET.y,
            CHARACTER_OFFSET.h,
            CHARACTER_OFFSET.w
        );
        this._instance.setFixedCollision();
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
                    start: (frames as any)[key].animationStart,
                    end: (frames as any)[key].animationEnd
                }),
                frameRate: (frames as any)[key].frameRate || 10,
                repeat: -1
            });
        });
    }
}
