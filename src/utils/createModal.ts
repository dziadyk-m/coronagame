import {createLabel} from "./createLabel";


export const createModal = (scene, choices) => {
    const x = scene.game.config.width / 2;
    const y = scene.game.config.height - 220;
    const dialog = scene.rexUI.add.dialog({
        x: x,
        y: y,
        width: scene.game.config.width / 1.5,


        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x2196F3),

        title: scene.rexUI.add.label({
            background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x90CAF9),
            text: scene.add.text(0, 0, 'Person1\n Tell me: 1+1+1 = ', {
                fontSize: '40px'
            }),
            space: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 10
            }
        }),

        // content: scene.add.text(0, 0, '1 + 1 + 1 + 1 + 1 = ', {
        //     fontSize: '54px'
        // }),

        choices: [
            createLabel(scene, '3'),
            createLabel(scene, '4'),
            createLabel(scene, '5'),
            createLabel(scene, '6')
        ],

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
            content: true,  // Content is a pure text object
        }
    })
        .layout()
    .drawBounds(scene.add.graphics(), 0xff0000)
    const textObject = scene.add.text(0, 0, '');
    dialog
        .on('button.click',  (button, groupName, index) => {
            textObject.text += index + ': ' + button.text + '\n';
            console.log('click')
            if (index === 0) {
                console.log(index)
                dialog.destroy()
            }
        }, scene)
        .on('button.over', (button, groupName, index) => {
            console.log(button)
            button.getElement('background').setStrokeStyle(2, 0xffffff);
        })
        .on('button.out',  (button, groupName, index) => {
            button.getElement('background').setStrokeStyle();
        });

    return dialog
}