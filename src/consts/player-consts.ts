import { TILE_SIZE } from './game-consts';
import { IHumanFrames } from '../models';

export const PLAYER_START = {
    x: TILE_SIZE * 4.5,
    y: TILE_SIZE * 10.5
};

export const PLAYER_SPEED = 150;

export const PLAYER_FRAMES: IHumanFrames = {
    up: { start: 11, end: 13 },
    down: { start: 4, end: 6 },
    left: { start: 8, end: 9 },
    right: { start: 1, end: 2 }
};
