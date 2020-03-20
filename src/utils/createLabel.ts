

export const createLabel = (scene, text: String) => {
    return scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 200, 40, 20, 0x64B5F6),
        width: 100,
        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),

        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    });
}