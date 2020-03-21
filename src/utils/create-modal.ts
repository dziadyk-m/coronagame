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

let typingInterval = null;

const type = (text: string, element: Node) => {

    let textBuffer = text;
    typingInterval = setInterval(() => {
        if (textBuffer.length) {
            const letter = textBuffer.slice(0, 1);
            element.textContent += letter;
            textBuffer = textBuffer.slice(1);
            console.log(letter, textBuffer)
        } else {
            clearInterval(typingInterval);
        }
    }, 30)
}

export const openModal = (title: string, text: string) => {
    clearInterval(typingInterval);
    const modal = document.getElementById('modal');
    modal.classList.add('modal__container--visible');
    modal.querySelector('[data-title]').textContent = title;
    modal.querySelector('[data-text-placeholder]').textContent = text;
    const textElement = modal.querySelector('[data-text]')
    textElement.textContent = '';
    type(text, textElement);
}

export const closeModal = () => {
    clearInterval(typingInterval);
    const modal = document.getElementById('modal');
    modal.classList.remove('modal__container--visible');
}
