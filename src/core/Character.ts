import { CHARACTER_DEFAULT_FRAMES, TILE_SIZE, CHARACTER_OFFSET, NPC_MODERATE_SPEED } from '../consts';
import { ICharacterFrames, ICharacterData, ICharacterMoves } from '../models';
import { TextBubble } from './TextBubble';
import { NpcSpeed } from './NpcSpeed';
import { Emotions } from './Emotions';
import { Animations } from '../enum';

const MIN_MESSAGE_INITIAL_OFFSET = 2000;
const MAX_MESSAGE_INITIAL_OFFSET = 4000;

export class Character {
    public action: Function = () => {};
    public idleAction: Function = () => {};
    public isIdleActionDone: boolean = false;
    
    protected _directions: ICharacterMoves;
    protected _spriteName: string;
    protected _npcSpeed: number;
    
    private _messages?: [{ cooldown: number, message: string }];
    private _instance: Phaser.Physics.Impact.ImpactSprite;
    private _lastMessageCooldown: number;
    private _lastMessageTime: number;
    private _textBubble: TextBubble;
    private _emotions: Emotions;
    private _speed: NpcSpeed;
    private _id: number;
    
    private _isInfected: boolean = false;
    private _hasStoped: boolean = false;
    private _constSpeed: boolean = false;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        anims: Phaser.Animations.AnimationManager,
        data: ICharacterData,
        frames?: ICharacterFrames
    ) {
        this._menageWaypoints(data);

        this._lastMessageTime = Date.now() + (Math.random() * (MAX_MESSAGE_INITIAL_OFFSET - MIN_MESSAGE_INITIAL_OFFSET)) + MIN_MESSAGE_INITIAL_OFFSET;
        this._instance = impact.add.sprite(data.startX * TILE_SIZE, data.startY * TILE_SIZE, data.sprite, 1);
        this.idleAction = this.setIsIdleDoneHof(data.idleAction);
        this._emotions = Emotions.getInstance(anims, impact);
        this._spriteName = data.sprite;
        this._messages = data.messages;
        this._lastMessageCooldown = 0;
        this.action = data.action;
        this._id = data.id;
        this._constSpeed = data.constantSpeed;

        this._menageAnimations(anims, data, frames);
        this._menagePhisics();

        this._textBubble = new TextBubble(this._instance, impact.scene);
    }

    get id(): number {
        return this._id;
    }
    
    get instance(): Phaser.Physics.Impact.ImpactSprite {
        return this._instance;
    }

    get spriteName(): string {
        return this._spriteName;
    }

    get isInfected(): boolean {
        return this._isInfected;
    }

    set hasStoped(value: boolean) {
        this._hasStoped = value;
    }

    public displayEmotion(id: string): void {
        this._emotions.display(this.instance.x, this.instance.y, id, this);
    }

    public tryToInfect(): void {
        if (Math.random() < 0.0085 && !this._isInfected) {
            this._isInfected = true;
            this.displayEmotion('hate');
        }
    }

    private setIsIdleDoneHof(fn: Function = () => {}): Function {
        return () => { fn(); this.isIdleActionDone = true;}
    }

    public move(): void {
        const direction = !this._hasStoped && this._directions
            ? this._directions.getStep(this._instance.x, this._instance.y)
            : 'stop'
        const getCurrentSpeed = this._constSpeed
            ? this._speed.getSpeed()
            : NPC_MODERATE_SPEED;
        switch (direction) {
            case Animations.UP: {
                this._moveUp(getCurrentSpeed);
                break;
            }
            case Animations.DOWN: {
                this._moveDown(getCurrentSpeed);
                break;
            }
            case Animations.LEFT: {
                this._moveLeft(getCurrentSpeed);
                break;
            }
            case Animations.RIGHT: {
                this._moveRight(getCurrentSpeed);
                break;
            }
            case 'stop': {
                this._stop();
                break;
            }
        }
        this._textBubble.update();
    }

    public update(): void {

        if (this._messages)
            this._saySentence();
    }

    private _saySentence = () => {
        const now = Date.now();
        const messageLength = 3000;

        const deltaTime = now - this._lastMessageTime;
        const requiredDelay = messageLength + this._lastMessageCooldown;
        if (deltaTime > requiredDelay) {
            const message = this._messages[0]
            this._lastMessageTime = now;
            this._lastMessageCooldown = message.cooldown;
            this._textBubble.showMessage(message.message, messageLength);
        }        
    }

    private _menageWaypoints(data: ICharacterData) {
        if (data.waypoints != null) {
            const startPoint = data.waypoints.getPoint()
            data.startX = startPoint[0]
            data.startY = startPoint[1]
        }
        this._directions = data.waypoints;
        this._speed = new NpcSpeed();
    }

    private _menageAnimations(anims: Phaser.Animations.AnimationManager, data: ICharacterData, frames?: ICharacterFrames) {
        if (!anims.get(`${this._spriteName}_${Animations.DOWN}`)) {
            this._createAnimations(anims, data.sprite, frames);
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

    private _moveUp(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_${Animations.UP}`, true);
        this.instance.setVelocityY(-speed);
        this.instance.setVelocityX(0);
    }

    private _moveDown(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_${Animations.DOWN}`, true);
        this.instance.setVelocityY(+speed);
        this.instance.setVelocityX(0);
    }

    private _moveLeft(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_${Animations.LEFT}`, true);
        this.instance.setVelocityX(-speed);
        this.instance.setVelocityY(0);
    }

    private _moveRight(speed: number): void {
        this._instance.anims.play(`${this._spriteName}_${Animations.RIGHT}`, true);
        this.instance.setVelocityX(speed);
        this.instance.setVelocityY(0);
    }

    private _stop(): void {
        this._instance.anims.play(`${this._spriteName}_${Animations.IDLE}`, true);
        this.instance.setVelocityX(0);
        this.instance.setVelocityY(0);
    }
}
