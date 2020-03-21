import { ICharacterData } from '../models';
import {DialogService} from "../services/dialog.service";
import {simpleDialog} from "../dialogs/SimpleDialog";

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'skeleton',
        startX: 7.5,
        startY: 9.5,
        action: () => DialogService
            .getInstance()
            .createModal(simpleDialog)
    },
    {
        sprite: 'monster',
        startX: 10.5,
        startY: 9.5,
        action: () => DialogService
            .getInstance()
            .createModal(simpleDialog)
    }
];
