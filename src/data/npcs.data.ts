import { ICharacterData, SingleStep, MultiSteps } from '../models';
import { DialogService, DataService } from '../services';

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'fox',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(-4, 11),
                new SingleStep(8, 11),
                new SingleStep(8, 6),
                new SingleStep(-4, 6),
                new SingleStep(-4, 11)
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
        sprite: 'npc_13',
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
                .findNpcById('npc_13')
                .displayEmotion('love');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(26, 18)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_4')
                .displayEmotion('love2');
        }
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [new SingleStep(2, 25), new SingleStep(4, 25)],
            false,
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_12')
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [new SingleStep(8, 25), new SingleStep(6, 25)],
            false,
            true
        ),
        action: () => {}
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(37, 28)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_13')
                .displayEmotion('haha');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(35, 28)], false, true),
        action: () => {}
    },
    {
        sprite: 'npc_5',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(39, 28)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_5')
                .displayEmotion('haha');
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
            DataService.getInstance()
                .findNpcById('npc_2')
                .displayEmotion('wow');
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
            DataService.getInstance()
                .findNpcById('npc_4')
                .displayEmotion('wow');
        }
    },
    {
        sprite: 'npc_6',
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
            DataService.getInstance()
                .findNpcById('npc_6')
                .displayEmotion('what');
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
            DataService.getInstance()
                .findNpcById('npc_1')
                .displayEmotion('what');
        }
    },
    {
        sprite: 'npc_7',
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
            DataService.getInstance()
                .findNpcById('npc_7')
                .displayEmotion('idk');
        }
    },
    {
        sprite: 'npc_8',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(118, 17)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_8')
                .displayEmotion('idk');
        }
    },
    {
        sprite: 'npc_9',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(114, 17)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_9')
                .displayEmotion('yes');
        }
    },
    {
        sprite: 'npc_10',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(122, 17),
                new SingleStep(129, 17),
                new SingleStep(129, 15),
                new SingleStep(122, 15),
                new SingleStep(122, 17)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_10')
                .displayEmotion('yes');
        }
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(133, 18),
                new SingleStep(156, 18),
                new SingleStep(133, 18)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_1')
                .displayEmotion('oh_yes');
        }
    },
    {
        sprite: 'npc_11',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(184, 18),
                new SingleStep(190, 18),
                new SingleStep(184, 18)
            ],
            false,
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_11')
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps([new SingleStep(177, 18)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_12')
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'fox',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(183, 26),
                new SingleStep(197, 26),
                new SingleStep(197, 28),
                new SingleStep(183, 28),
                new SingleStep(183, 26)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('fox')
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'fox',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(86, 10),
                new SingleStep(108, 10),
                new SingleStep(108, 6),
                new SingleStep(86, 6),
                new SingleStep(86, 10)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('fox')
                .displayEmotion('oh_yes');
        }
    },
    {
        sprite: 'npc_14',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(16, 27),
                new SingleStep(31, 27),
                new SingleStep(16, 27)
            ],
            true
        ),
        action: () => {}
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(16, 24),
                new SingleStep(31, 24),
                new SingleStep(16, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('npc_13')
                .displayEmotion('oh_no');
        }
    },
    {
        sprite: 'fox',
        startX: 10.5,
        startY: 6.5,
        waypoints: new MultiSteps(
            [
                new SingleStep(21, 22),
                new SingleStep(33, 22),
                new SingleStep(33, 19),
                new SingleStep(21, 19),
                new SingleStep(21, 22)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById('fox')
                .displayEmotion('eek');
        }
    }
];
