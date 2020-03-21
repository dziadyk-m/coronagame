import { IGameModel } from '../models';
import { DialogService } from '../services';

export const GAME_OBJECTS_DATA: IGameModel[] = [
    {
        positionX: 15.5,
        positionY: 6.5,
        id: 'golfIV1',
        action: () => {
            DialogService.getInstance().openModal(
                'Kosz na śmieci',
                `Test ciążowy... Pozytywny.`
            );
        }
    }
];
