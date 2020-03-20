import { Human } from './Human';

export class Player extends Human {
    private _cursors: CursorKeys;

    constructor(
        impact: Phaser.Physics.Impact.ImpactPhysics,
        animations: Phaser.Animations.AnimationManager,
        input: Phaser.Input.InputPlugin
    ) {
        super(impact, animations, 'player', 30, 50);

        this._cursors = input.keyboard.createCursorKeys();
        this.instance.setMaxVelocity(300, 400);
    }

    public move(): void {
        this.instance.setVelocity(0);

        if (this._cursors.left.isDown) {
            this.instance.setVelocityX(-100);
        } else if (this._cursors.right.isDown) {
            this.instance.setVelocityX(100);
        }

        if (this._cursors.up.isDown) {
            this.instance.setVelocityY(-100);
        } else if (this._cursors.down.isDown) {
            this.instance.setVelocityY(100);
        }

        if (this._cursors.left.isDown) {
            this.instance.anims.play('left', true);
        } else if (this._cursors.right.isDown) {
            this.instance.anims.play('right', true);
        } else if (this._cursors.up.isDown) {
            this.instance.anims.play('up', true);
        } else if (this._cursors.down.isDown) {
            this.instance.anims.play('down', true);
        } else {
            this.instance.anims.stop();
        }
    }
}
