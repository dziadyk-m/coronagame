import { PLAYER_SPEED, PLAYER_DATA } from '../consts';
import { Character } from './Character';
import { Animations } from '../enum';

export class Player extends Character {
    private _cursors: CursorKeys;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        animations: Phaser.Animations.AnimationManager,
        input: Phaser.Input.InputPlugin
    ) {
        super(impact, animations, PLAYER_DATA);
        this._cursors = input.keyboard.createCursorKeys();
        this.instance.setMaxVelocity(300, 300);
        this.instance.setActiveCollision();
        impact.world.on('collide', (x) => { console.log(x) });
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
            this.instance.anims.play(`${this._spriteName}_${Animations.LEFT}`, true);
        } else if (this._cursors.right.isDown) {
            this.instance.anims.play(`${this._spriteName}_${Animations.RIGHT}`, true);
        } else if (this._cursors.up.isDown) {
            this.instance.anims.play(`${this._spriteName}_${Animations.UP}`, true);
        } else if (this._cursors.down.isDown) {
            this.instance.anims.play(`${this._spriteName}_${Animations.DOWN}`, true);
        } else {
            this.instance.anims.stop();
        }
    }
}
