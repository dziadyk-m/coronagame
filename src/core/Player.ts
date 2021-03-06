import { PLAYER_SPEED, PLAYER_DATA } from '../consts';
import { Character } from './Character';
import { Animations } from '../enum';
import { DataService } from '../services';

export class Player extends Character {
    private _cursors: CursorKeys;
    private _infected: number;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        animations: Phaser.Animations.AnimationManager,
        input: Phaser.Input.InputPlugin
    ) {
        super(impact, animations, PLAYER_DATA);
        this._cursors = input.keyboard.createCursorKeys();
        this.instance.setMaxVelocity(300, 300);
        this.instance.setActiveCollision();
        this._infected = 0;
    }

    public update = () => {
        if (DataService.getInstance().shouldDisplayInfection) {
            if (this._infected !== DataService.getInstance().infectedNpcs) {
                this._infected = DataService.getInstance().infectedNpcs
                this.textBubble.showMessage(`Infected: ${this._infected}`, 2000);
            }
            this.textBubble.update();
        }
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
            this.instance.anims.play(`${this._spriteName}_${Animations.IDLE}`, true);
        }
    }
}
