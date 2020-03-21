import { createModal } from "../utils";

export class DialogService {
    private static _instance: DialogService;
    readonly _scene;

    constructor(sceneObject) {
        this._scene = sceneObject.scene;
    }

    createModal = ({ question, getChoices, getContent = () => null, actions = [(_props) => {}] }) => {
        createModal(this._scene, question, getChoices, getContent, actions);
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
