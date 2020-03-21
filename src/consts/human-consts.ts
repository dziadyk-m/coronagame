import { ICharacterFrames } from '../models';

export const HUMAN_FRAMES: ICharacterFrames = {
    up: { animationStart: 6, animationEnd: 8 },
    down: { animationStart: 0, animationEnd: 2 },
    left: { animationStart: 9, animationEnd: 11 },
    right: { animationStart: 3, animationEnd: 5 },
    idle: { animationStart: 12, animationEnd: 13 }
};

export const NPC_STOPPED: number =  0;
export const NPC_SLOW_SPEED: number =  25;
export const NPC_MODERATE_SPEED: number =  75;
export const NPC_SPRINT_SPEED: number =  200;
