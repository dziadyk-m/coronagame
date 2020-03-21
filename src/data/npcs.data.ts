import { DataService, DialogService } from '../services';
import { ICharacterData, ICharacterMoves, SingleStep, MultiSteps  } from '../models';
import { SIMPLE_DIALOG } from './dialogs';

export const NPC_DATA: ICharacterData[] = [
    // {
    //     sprite: 'skeleton',
    //     startX: 7.5,
    //     startY: 9.5,
    //     action: () => {
    //         DialogService
    //             .getInstance()
    //             .createModal(SIMPLE_DIALOG);
    //     }
    // },
    // {
    //     sprite: 'monster',
    //     startX: 10.5,
    //     startY: 9.5,
    //     action: () => {
    //         DataService.getInstance()
    //             .findNpcById('monster')
    //             .displayEmotion('emotions_cringe');
    //     }
    // },

    
    // DialogService.getInstance().openModal(
    //     'Test modal', 
    //     `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    // );
    {
        sprite: 'test',
        startX: 10.5,
        startY: 6.5,
        action: () => {
            DialogService
                .getInstance()
                .createDialog(SIMPLE_DIALOG);
        }
    }
];

export const NPC_PATHS: ICharacterMoves[] = [
    new MultiSteps(
        [
            new SingleStep(1, 10),
            new SingleStep(199, 10),
            new SingleStep(1, 10)
        ],
        true
    ),
    new MultiSteps(
        [
            new SingleStep(1, 6),
            new SingleStep(199, 6),
            new SingleStep(1, 6)
        ],
        true
    )
]

// (1, 10) -> (199, 10) -> (1, 10) 
// (1, 6) -> (199, 6) -> (1, 6)
// (1,19) -> (39, 19) -> [(39, 22), (68, 19)]