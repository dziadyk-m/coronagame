import { ICharacterFrames, ICharacterData } from '../models';

export const PLAYER_DATA: ICharacterData = {
    sprite: 'player',
    startX: 4.5,
    startY: 10.5,
    action: null
};

export const PLAYER_SPEED = 150;

export const PLAYER_FRAMES: ICharacterFrames = {
    up: { animationStart: 11, animationEnd: 13 },
    down: { animationStart: 4, animationEnd: 6 },
    left: { animationStart: 8, animationEnd: 9 },
    right: { animationStart: 1, animationEnd: 2 }
};

export const CHARACTER_DEFAULT_FRAMES: ICharacterFrames = {
    up: { animationStart: 6, animationEnd: 8 },
    down: { animationStart: 0, animationEnd: 2 },
    left: { animationStart: 9, animationEnd: 11 },
    right: { animationStart: 3, animationEnd: 5 },
    idle: { animationStart: 12, animationEnd: 13, frameRate: 5 }
};
