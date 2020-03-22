const MAX_BUBBLE_WIDTH = 140;

export class TextBubble {
    public visible: boolean;
    private _text: Phaser.GameObjects.Text;
    private _parent: Phaser.Physics.Impact.ImpactSprite;

    constructor(parent: Phaser.Physics.Impact.ImpactSprite, scene: Phaser.Scene) {

        this._parent = parent;
        this.visible = false;
        const { x, y } = 
        this._text = scene.add.text(parent.x, parent.y, 'gfsdafdsfsdf', { 
            wordWrap: { width: MAX_BUBBLE_WIDTH },
            fontSize: '0.85rem',
            backgroundColor: '#fff',
            color: '#000',
            padding: { x: 5, y: 5},
        });
        this._text.setAlpha(0);
        this._text.setDepth(1);
        this.update();
    }

    public showMessage = (message: string, time: number) => {
        this._text.setAlpha(0.7);
        this._text.setText(message);
        this.visible = true;
        setTimeout(() => {
            this._text.setAlpha(0);
            this.visible = false;
        }, time);
    }
    
    public update = () => {
        const { x, y } = this.calculatePosition(this._parent);
        this._text.setPosition(x, y);
    }

    private calculatePosition = (parent: Phaser.Physics.Impact.ImpactSprite) => ({
        x: parent.x - (this._text.displayWidth / 2),
        y: parent.y - parent.displayHeight - this._text.displayHeight + 25
    })


}