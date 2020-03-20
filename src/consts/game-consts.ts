import { ICharacterFrames } from "../models";

export const TILE_SIZE = 32;

export const COLISION_BLOCKS = {
    start: 400,
    stop: 600
};

export const CHARACTER_DEFAULT_FRAMES: ICharacterFrames = {
    up: { animationStart: 6, animationEnd: 8 },
    down: { animationStart: 0, animationEnd: 2 },
    left: { animationStart: 9, animationEnd: 11 },
    right: { animationStart: 3, animationEnd: 5 },
    idle: { animationStart: 12, animationEnd: 13, frameRate: 5 }
};
