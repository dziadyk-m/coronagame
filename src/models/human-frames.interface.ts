interface IFrames {
    start: number,
    end: number
}

export interface IHumanFrames {
    up: IFrames;
    down: IFrames;
    left: IFrames;
    right: IFrames;
    idle?: IFrames;
}