import { PLAYER_START, PLAYER_SPEED, PLAYER_FRAMES } from '../consts';
import { Character } from './Character';

export class Player extends Character {
    private _cursors: CursorKeys;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        animations: Phaser.Animations.AnimationManager,
        input: Phaser.Input.InputPlugin
    ) {
        super(
            impact,
            animations,
            'player',
            PLAYER_START.x,
            PLAYER_START.y,
            PLAYER_FRAMES
        );
        this._cursors = input.keyboard.createCursorKeys();
        this.instance.setMaxVelocity(300, 300);
        this.instance.setActiveCollision();
    }
    
    public move(): void {
        this.instance.setVelocity(0);

        if (this._cursors.left.isDown) {
            this.instance.setVelocityX(-PLAYER_SPEED);
        } else if (this._cursors.right.isDown) {
            this.instance.setVelocityX(PLAYER_SPEED);
        }

        if (this._cursors.up.isDown) {
            this.instance.setVelocityY(-PLAYER_SPEED);
        } else if (this._cursors.down.isDown) {
            this.instance.setVelocityY(PLAYER_SPEED);
        }

        if (this._cursors.left.isDown) {
            this.instance.anims.play(`${this._spriteName}_left`, true);
        } else if (this._cursors.right.isDown) {
            this.instance.anims.play(`${this._spriteName}_right`, true);
        } else if (this._cursors.up.isDown) {
            this.instance.anims.play(`${this._spriteName}_up`, true);
        } else if (this._cursors.down.isDown) {
            this.instance.anims.play(`${this._spriteName}_down`, true);
        } else {
            this.instance.anims.stop();
        }
    }
}
