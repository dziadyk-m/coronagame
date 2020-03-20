interface IFrames {
    animationStart: number,
    animationEnd: number,
    frameRate?: number
}

export interface ICharacterFrames {
    up: IFrames;
    down: IFrames;
    left: IFrames;
    right: IFrames;
    idle?: IFrames;
}