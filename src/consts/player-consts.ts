import { ICharacterFrames, ICharacterData } from '../models';
import { TILE_SIZE } from './game-consts';

export const PLAYER_SPEED = 150;

export const PLAYER_FRAMES: ICharacterFrames = {
    up: { start: 11, end: 13 },
    down: { start: 4, end: 6 },
    left: { start: 8, end: 9 },
    right: { start: 1, end: 2 }
};

export const PLAYER_DATA: ICharacterData = {
    sprite: 'player',
    startX: 4.5,
    startY: 10.5,
    action: null
};