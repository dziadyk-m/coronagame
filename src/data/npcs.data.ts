import { ICharacterData, SingleStep, MultiSteps } from '../models';
import { DialogService, DataService } from '../services';
import { SIMPLE_DIALOG } from './dialogs';

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'fox',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(1, 10),
                new SingleStep(199, 10),
                new SingleStep(1, 10)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().openModal(
                'Test modal',
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
            );
        },
        messages: [
            { cooldown: 5000, message: '*Cough*' } 
        ]
    },
    {
        sprite: 'npc_3',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(1, 6),
                new SingleStep(199, 6),
                new SingleStep(1, 6)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_3')
                .displayEmotion('emotions_cringe');
        },
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(1, 19),
                new SingleStep(39, 6),
                new SingleStep(39, 22),
                new SingleStep(68, 19)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    }
];
