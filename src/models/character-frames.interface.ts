interface IFrames {
    start: number,
    end: number
}

export interface ICharacterFrames {
    up: IFrames;
    down: IFrames;
    left: IFrames;
    right: IFrames;
    idle?: IFrames;
}