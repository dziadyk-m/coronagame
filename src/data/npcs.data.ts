import { DataService, DialogService } from '../services';
import { ICharacterData } from '../models';
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
    {
        sprite: 'test',
        startX: 10.5,
        startY: 6.5,
        action: () => {
            DataService.getInstance()
                .findNpcById('test')
                .displayEmotion('emotions_love2');
        }
    }
];
