import { ICharacterFrames } from '../models';

export const CHARACTER_DEFAULT_FRAMES: ICharacterFrames = {
    up: { start: 6, end: 8 },
    down: { start: 0, end: 2 },
    left: { start: 9, end: 11 },
    right: { start: 3, end: 5 },
    idle: { start: 12, end: 13 }
};
