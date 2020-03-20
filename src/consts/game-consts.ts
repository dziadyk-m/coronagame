import { ICharacterFrames } from "../models";

export const TILE_SIZE = 32;

export const COLISION_BLOCKS = {
    start: 400,
    stop: 600
};

export const CHARACTER_DEFAULT_FRAMES: ICharacterFrames = {
    up: { start: 6, end: 8 },
    down: { start: 0, end: 2 },
    left: { start: 9, end: 11 },
    right: { start: 3, end: 5 },
    idle: { start: 12, end: 13 }
};
