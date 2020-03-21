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
    idle: { animationStart: 0, animationEnd: 0, frameRate: 5 }
};

export const EMOTION_FRAMES: IFrame[] = [
    { key: 'wow', animationStart: 0, animationEnd: 7 },
    { key: 'what', animationStart: 8, animationEnd: 15 },
    { key: 'love', animationStart: 16, animationEnd: 23 },
    { key: 'love2', animationStart: 24, animationEnd: 31 },
    { key: 'hate', animationStart: 32, animationEnd: 39 },
    { key: 'cringe', animationStart: 40, animationEnd: 47 },
    { key: 'haha', animationStart: 48, animationEnd: 55 },
    { key: 'idk', animationStart: 56, animationEnd: 63 },
    { key: 'haha2', animationStart: 64, animationEnd: 71 },
    { key: 'zzz', animationStart: 72, animationEnd: 79 },
    { key: 'yes', animationStart: 80, animationEnd: 87 },
    { key: 'no', animationStart: 88, animationEnd: 95 },
    { key: 'eek', animationStart: 96, animationEnd: 103 },
    { key: 'oh_yes', animationStart: 104, animationEnd: 111 },
    { key: 'oh_no', animationStart: 112, animationEnd: 119 }
];
