import { ICharacterFrames, IFrame } from '../models';

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

export const EMOTION_FRAMES: IFrame[] = [
    { key: 'wow', animationStart: 0, animationEnd: 7 },
    { key: 'what', animationStart: 8, animationEnd: 15 },
    { key: 'love', animationStart: 16, animationEnd: 23 },
    { key: 'love2', animationStart: 24, animationEnd: 31 },
    { key: 'hate', animationStart: 32, animationEnd: 39 },
    { key: 'cringe', animationStart: 40, animationEnd: 47 },
    { key: 'haha', animationStart: 48, animationEnd: 55 }
];
