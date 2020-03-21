export function createModal(scene, question, getChoices, getContent = () => null, actions = [(_) => {}]) {
    const x = scene.game.config.width / 2;
    const y = scene.game.config.height - 220;
    const dialog = scene.rexUI.add.dialog({
        x: x,
        y: y,
        width: scene.game.config.width / 1.5,
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x2196F3),
        title: scene.rexUI.add.label({
            background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x90CAF9),
            text: scene.add.text(0, 0, question, {
                fontSize: '40px'
            }),
            space: { left: 15, right: 15, top: 10, bottom: 10 }
        }),
        content: getContent(),
        choices: getChoices(),
        space: { title: 25, content: 25, choice: 15, left: 25, right: 25, top: 25, bottom: 25 },
        expand: { content: true }
    }).layout()

    dialog.on('button.click',  (button, groupName, index) => actions[index]({ dialog, button, groupName, index, scene }), scene)
          .on('button.over', (button, _groupName) => { button.getElement('background').setStrokeStyle(2, 0xffffff); })
          .on('button.out',  (button, _groupName) => { button.getElement('background').setStrokeStyle(); });
    return dialog
}

export const openModal = (title: string, content: string) => {
    const modal = document.getElementById('modal');
    modal.classList.add('modal__container--visible');
    modal.querySelector('[data-title]').textContent = title;
    modal.querySelector('[data-content]').textContent = content;
}

export const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('modal__container--visible');
}
