import { ICharacterData } from '../models';
import { DataService } from '../services';
import {DialogService} from "../services/dialog.service";
import {simpleDialog} from "../dialogs/SimpleDialog";

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'skeleton',
        startX: 7.5,
        startY: 9.5,
        action: () => {
            console.log('Hello im skeleton');
            DataService.getInstance()
                .findNpcById('skeleton')
                .displayEmotion('emotions_wow');
            DialogService
                .getInstance()
                .createModal(simpleDialog)

        }
    },
    {
        sprite: 'monster',
        startX: 10.5,
        startY: 9.5,
        action: () => {
            console.log('Hello im monster');
            DataService.getInstance()
                .findNpcById('monster')
                .displayEmotion('emotions_cringe');
            DialogService
                .getInstance()
                .createModal(simpleDialog)
        }
    }
];
