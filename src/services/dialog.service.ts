export class DialogService {
    private static _typingInterval?: NodeJS.Timeout;
    private static _instance: DialogService;
    private static _modal: Element;
    readonly _scene;

    constructor(sceneObject) {
        this._scene = sceneObject.scene;
        DialogService._modal = document.getElementById('modal');
        DialogService._modal.querySelector('[data-action="close"]').addEventListener('click', this.closeAllModals);
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

    public openModal = (title: string, text: string) => {
        clearInterval(DialogService._typingInterval);
        DialogService._modal.classList.add('modal__container--visible');
        DialogService._modal.querySelector('[data-title]').textContent = title;
        DialogService._modal.querySelector('[data-text-placeholder]').textContent = text;
        const textElement = DialogService._modal.querySelector('[data-text]')
        textElement.textContent = '';
        this._type(text, textElement);
    }
    
    public closeAllModals = (): void => {
        clearInterval(DialogService._typingInterval);
        DialogService._modal.classList.remove('modal__container--visible');
    }

    private _type = (text: string, element: Node): void => {
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
}
