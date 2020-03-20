import { ICharacterFrames, ICharacterData } from '../models';

export const PLAYER_SPEED = 150;

export const PLAYER_FRAMES: ICharacterFrames = {
    up: { animationStart: 11, animationEnd: 13 },
    down: { animationStart: 4, animationEnd: 6 },
    left: { animationStart: 8, animationEnd: 9 },
    right: { animationStart: 1, animationEnd: 2 }
};

export const PLAYER_DATA: ICharacterData = {
    sprite: 'player',
    startX: 4.5,
    startY: 10.5,
    action: null
};
