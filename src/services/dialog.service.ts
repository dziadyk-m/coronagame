import { createModal } from "../utils";

export class DialogService {
    private static _instance: DialogService;
    private static _typingInterval?: NodeJS.Timeout;
    private static _modal: Element;
    readonly _scene;

    constructor(sceneObject) {
        this._scene = sceneObject.scene;
        DialogService._modal = document.getElementById('modal');
        DialogService._modal.querySelector('[data-action="close"]').addEventListener('click', this.closeModal);
    }

    createModal = ({ question, getChoices, getContent = () => null, actions = [(_props) => {}] }) => {
        createModal(this._scene, question, getChoices, getContent, actions);
    }

    type = (text: string, element: Node) => {

        let textBuffer = text;
        DialogService._typingInterval = setInterval(() => {
            if (textBuffer.length) {
                const letter = textBuffer.slice(0, 1);
                element.textContent += letter;
                textBuffer = textBuffer.slice(1);
            } else {
                clearInterval(DialogService._typingInterval);
            }
        }, 20)
    }

    openModal = (title: string, text: string) => {
        clearInterval(DialogService._typingInterval);
        DialogService._modal.classList.add('modal__container--visible');
        DialogService._modal.querySelector('[data-title]').textContent = title;
        DialogService._modal.querySelector('[data-text-placeholder]').textContent = text;
        const textElement = DialogService._modal.querySelector('[data-text]')
        textElement.textContent = '';
        this.type(text, textElement);
    }
    
    closeModal = () => {
        clearInterval(DialogService._typingInterval);
        DialogService._modal.classList.remove('modal__container--visible');
    }

    createLabel = (text: String): void => {
        return this._scene.rexUI.add.label({
            background: this._scene.rexUI.add.roundRectangle(0, 0, 200, 40, 20, 0x64B5F6),
            width: 100,
            text: this._scene.add.text(0, 0, text, { fontSize: '24px' }),
            space: { left: 10, right: 10, top: 10, bottom: 10 }
        });
    }

    public static init(scene): void {
        DialogService._instance = new DialogService(scene);
    }

    public static getInstance(): DialogService {
        if (!DialogService._instance) {
            return null;
        }
        return DialogService._instance;
    }
}
