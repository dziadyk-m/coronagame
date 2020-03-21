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
                new SingleStep(0, 11),
                new SingleStep(8, 11),
                new SingleStep(8, 6),
                new SingleStep(-4, 6),
                new SingleStep(-4, 11),
                new SingleStep(0, 11)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().openModal(
                'Test modal',
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
            );
        }
    },
    {
        sprite: 'npc_3',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(69, 13),
                new SingleStep(69, 16),
                new SingleStep(79, 16),
                new SingleStep(79, 13),
                new SingleStep(69, 13)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_3')
                .displayEmotion('emotions_cringe');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(26, 18)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(2, 25),
                new SingleStep(4, 25)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(8, 25),
                new SingleStep(6, 25)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_3',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(37, 27)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(35, 27)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(39, 27)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(46, 11),
                new SingleStep(74, 11),
                new SingleStep(74, 6),
                new SingleStep(46, 6),
                new SingleStep(46, 11)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(86, 6),
                new SingleStep(190, 6),
                new SingleStep(190, 5),
                new SingleStep(86, 5),
                new SingleStep(86, 6)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(173, 24),
                new SingleStep(173, 58),
                new SingleStep(180, 58),
                new SingleStep(180, 24),
                new SingleStep(173, 24)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(174, 24),
                new SingleStep(174, 57),
                new SingleStep(181, 57),
                new SingleStep(181, 24),
                new SingleStep(174, 24)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {   
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(82, 24),
                new SingleStep(90, 24),
                new SingleStep(90, 21),
                new SingleStep(82, 21),
                new SingleStep(82, 19),
                new SingleStep(90, 19),
                new SingleStep(90, 24),
                new SingleStep(82, 24)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_3',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(118, 16)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(113, 16)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(112, 16),
                new SingleStep(129, 16),
                new SingleStep(129, 14),
                new SingleStep(112, 14),
                new SingleStep(112, 16)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_3',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(133, 17),
                new SingleStep(156, 17),
                new SingleStep(133, 17)
            ],
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(184, 17),
                new SingleStep(190, 17),
                new SingleStep(184, 17)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(177, 17)
            ],
            false,
            true
        ),
        action: () => {
            DialogService.getInstance().createDialog(SIMPLE_DIALOG);
        }
    }
];
