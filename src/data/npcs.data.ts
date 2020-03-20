import { ICharacterData } from '../models';

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'skeleton',
        startX: 7.5,
        startY: 9.5,
        action: () => console.log('Hello im skeleton')
    },
    {
        sprite: 'monster',
        startX: 10.5,
        startY: 9.5,
        action: () => console.log('Hello im monster')
    }
];
