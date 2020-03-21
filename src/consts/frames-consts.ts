import { ICharacterFrames, IFrame } from '../models';

export const CHARACTER_OFFSET = {
    x: 20,
    y: 0,
    h: 24,
    w: 24
};

export const CHARACTER_DEFAULT_FRAMES: ICharacterFrames = {
    right: { animationStart: 8, animationEnd: 15 },
    up: { animationStart: 16, animationEnd: 23 },
    down: { animationStart: 24, animationEnd: 31 },
    left: { animationStart: 32, animationEnd: 39 },
    idle: { animationStart: 24, animationEnd: 31, frameRate: 5 }
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
