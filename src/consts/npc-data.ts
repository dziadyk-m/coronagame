import { TILE_SIZE } from './game-consts';
import { INpcData } from '../models';

export const NPC_DATA: INpcData[] = [
    {
        sprite: 'skeleton',
        startX: 7.5 * TILE_SIZE,
        startY: 8.5 * TILE_SIZE
    },
    {
        sprite: 'monster',
        startX: 9.5 * TILE_SIZE,
        startY: 8.5 * TILE_SIZE
    }
];
