
export const createModal = (scene, question, getChoices, getContent = () => null, actions = [(props) => {}]) => {
    const x = scene.game.config.width / 2;
    const y = scene.game.config.height - 220;
    let dialog = scene.rexUI.add.dialog({
        x: x,
        y: y,
        width: scene.game.config.width / 1.5,
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x2196F3),
        title: scene.rexUI.add.label({
            background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x90CAF9),
            text: scene.add.text(0, 0, question, {
                fontSize: '40px'
            }),
            space: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 10
            }
        }),
        content: getContent(),
        choices: getChoices(),
        space: {
            title: 25,
            content: 25,
            choice: 15,
            left: 25,
            right: 25,
            top: 25,
            bottom: 25,
        },
        expand: {
            content: true,
        }
    }).layout()

    dialog
        .on('button.click',  (button, groupName, index) => actions[index]({ dialog, button, groupName, index, scene }), scene)
        .on('button.over', (button, groupName, index) => {
            console.log(button)
            button.getElement('background').setStrokeStyle(2, 0xffffff);
        })
        .on('button.out',  (button, groupName, index) => {
            button.getElement('background').setStrokeStyle();
        });

    return dialog
}