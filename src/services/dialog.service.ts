import {createModal} from "../utils/createModal";

export class DialogService {
    private static instance: DialogService;
    readonly scene;

    constructor(sceneObject) {
        this.scene = sceneObject.scene;
        console.log(`Scene init:`, this.scene)
    }

    createModal = ({ question, getChoices, getContent = () => null, actions = [(props) => {}] }) => {
        createModal(this.scene, question, getChoices, getContent, actions);
    }

    createLabel = (text: String) => {
        console.log(text)
        return this.scene.rexUI.add.label({
            background: this.scene.rexUI.add.roundRectangle(0, 0, 200, 40, 20, 0x64B5F6),
            width: 100,
            text: this.scene.add.text(0, 0, text, {
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

    public static init(scene) {
        DialogService.instance = new DialogService(scene);
    }

    public static getInstance(): DialogService {
        if (!DialogService.instance) {
            return null;
        }
        return DialogService.instance;
    }
}
