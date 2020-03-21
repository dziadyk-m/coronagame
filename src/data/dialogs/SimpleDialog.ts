import { DialogService } from '../../services/dialog.service';

const simple_dialog_1 = {
    question: 'Person1\n Wow, goooood jobuuuuu!',
    getChoices: () => [DialogService.getInstance().createLabel('Easy.')],
    getContent: () => null,
    actions: [({ dialog }) => dialog.destroy()]
};

const simple_dialog_2 = {
    question: 'Person1\n you stupid boi...',
    getChoices: () => [
        DialogService.getInstance().createLabel('Fuck off you stupid freak.')
    ],
    getContent: () => null,
    actions: [({ dialog }) => dialog.destroy()]
};

const spimple_dialog_actions = [
    ({ dialog }) => {
        dialog.destroy();
        DialogService.getInstance().createModal(simple_dialog_2);
    },
    ({ dialog }) => {
        dialog.destroy();
        DialogService.getInstance().createModal(simple_dialog_1);
    },
    ({ dialog }) => { dialog.destroy(); }
];

export const SIMPLE_DIALOG = {
    question: 'Person1\n Tell me: 1+1+1 = ',
    getChoices: () => [
        DialogService.getInstance().createLabel(
            "It's easy, I'm pretty sure about that. Yyyyy, 2."
        ),
        DialogService.getInstance().createLabel('LoL, 3'),
        DialogService.getInstance().createLabel('Are you pervert?')
    ],
    getContent: () => null,
    actions: spimple_dialog_actions
};
