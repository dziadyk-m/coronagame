import {DialogService} from "../services/dialog.service";

const firstSubDialog = {
    question: 'Person1\n Wow, goooood jobuuuuu!',
    getChoices: () => [DialogService.getInstance().createLabel("Easy.")],
    getContent: () => null,
    actions: [({dialog}) => dialog.destroy()]
};

const secondSubDialog = {
    question: 'Person1\n you stupid boi...',
    getChoices: () => [DialogService.getInstance().createLabel("Fuck off you stupid freak.")],
    getContent: () => null,
    actions: [({dialog}) => dialog.destroy()]
};

const actions = [
    ({dialog}) => {
        dialog.destroy();
        DialogService.getInstance().createModal(secondSubDialog);
    },
    ({dialog}) => {
        dialog.destroy();
        DialogService.getInstance().createModal(firstSubDialog);
    },
    ({dialog}) => {
        dialog.destroy()
    }
];

export const simpleDialog = {
    question: 'Person1\n Tell me: 1+1+1 = ',
    getChoices: () => [
        DialogService.getInstance().createLabel("It's easy, I'm pretty sure about that. Yyyyy, 2."),
        DialogService.getInstance().createLabel('LoL, 3'),
        DialogService.getInstance().createLabel('Wypierdalaj, zwyrolu...')
    ],
    getContent: () => null,
    actions: actions
};


